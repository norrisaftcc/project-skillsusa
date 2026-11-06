/* FTCC SkillsUSA Prep. Plain JavaScript, no framework.
   Every page works without this file. The script adds:
   - scrollable wrappers for wide tables,
   - "past" and "next" markers on date lists,
   - saved progress for the checklist and the practice scorecard. */
(function () {
  "use strict";
  document.documentElement.classList.add("has-js");

  var store = {
    get: function (key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked: work without it */ }
    }
  };

  function download(name, text) {
    var blob = new Blob([text], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  function wrapTables() {
    document.querySelectorAll("main table").forEach(function (table) {
      if (table.parentElement.classList.contains("table-wrap")) return;
      var wrap = document.createElement("div");
      wrap.className = "table-wrap";
      wrap.tabIndex = 0;
      wrap.setAttribute("role", "region");
      var caption = table.querySelector("caption");
      var heading = null;
      for (var el = table.previousElementSibling; el; el = el.previousElementSibling) {
        if (/^H[1-6]$/.test(el.tagName)) { heading = el; break; }
      }
      if (!heading) heading = document.querySelector("main h1");
      wrap.setAttribute("aria-label", caption ? caption.textContent.trim() : (heading ? heading.textContent.trim() + " (table)" : "Table"));
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });
  }

  function markDates() {
    var items = document.querySelectorAll(".date-item[data-end]");
    if (!items.length) return;
    var today = new Date();
    var todayKey = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    var nextFound = false;
    items.forEach(function (item) {
      var end = parseInt(item.getAttribute("data-end").replace(/-/g, ""), 10);
      var flag = item.querySelector(".date-flag");
      if (end < todayKey) {
        item.classList.add("is-past");
        if (flag) flag.textContent = "Past";
      } else if (!nextFound) {
        nextFound = true;
        item.classList.add("is-next");
        if (flag) flag.textContent = "Next";
      }
    });
  }

  function checklist() {
    var root = document.querySelector("[data-checklist]");
    if (!root) return;
    var key = "ftcc-skillsusa-checklist-v1";
    var state = store.get(key, {});
    var boxes = root.querySelectorAll("input[type=checkbox][data-id]");
    var progress = document.querySelector("[data-checklist-progress]");

    function update() {
      var done = 0;
      boxes.forEach(function (b) { if (b.checked) done++; });
      if (progress) progress.textContent = done + " of " + boxes.length + " done";
    }
    boxes.forEach(function (b) {
      b.checked = !!state[b.getAttribute("data-id")];
      b.addEventListener("change", function () {
        state[b.getAttribute("data-id")] = b.checked;
        store.set(key, state);
        update();
      });
    });
    update();

    var reset = document.querySelector("[data-checklist-reset]");
    if (reset) reset.addEventListener("click", function () {
      state = {};
      store.set(key, state);
      boxes.forEach(function (b) { b.checked = false; });
      update();
    });

    var exp = document.querySelector("[data-checklist-export]");
    if (exp) exp.addEventListener("click", function () {
      var lines = ["FTCC SkillsUSA readiness checklist", "Exported " + new Date().toDateString(), "Local planning aid. It is not proof that a rule is met.", ""];
      root.querySelectorAll("h2, h3, input[type=checkbox][data-id]").forEach(function (el) {
        if (el.tagName === "INPUT") {
          var text = el.closest("label").querySelector(".check-text").textContent.trim();
          lines.push("[" + (el.checked ? "x" : " ") + "] " + text);
        } else {
          lines.push("", el.textContent.trim());
        }
      });
      download("skillsusa-checklist.txt", lines.join("\n") + "\n");
    });
  }

  function scorecard() {
    var root = document.querySelector("[data-scorecard]");
    if (!root) return;
    var key = "ftcc-skillsusa-scorecard-v1";
    var state = store.get(key, {});
    var inputs = root.querySelectorAll("input[type=number][data-id]");
    var total = document.querySelector("[data-score-total]");

    function clamp(input) {
      var max = parseFloat(input.max);
      var v = parseFloat(input.value);
      if (isNaN(v) || v < 0) return 0;
      return v > max ? max : v;
    }
    function update() {
      var sum = 0;
      inputs.forEach(function (i) { sum += clamp(i); });
      if (total) total.textContent = sum + " / 100";
    }
    inputs.forEach(function (i) {
      var id = i.getAttribute("data-id");
      if (state[id] !== undefined) i.value = state[id];
      i.addEventListener("input", function () {
        state[id] = i.value;
        store.set(key, state);
        update();
      });
    });
    update();

    var reset = document.querySelector("[data-score-reset]");
    if (reset) reset.addEventListener("click", function () {
      state = {};
      store.set(key, state);
      inputs.forEach(function (i) { i.value = ""; });
      update();
    });

    var exp = document.querySelector("[data-score-export]");
    if (exp) exp.addEventListener("click", function () {
      var lines = ["FTCC SkillsUSA practice scorecard (local practice rubric, not official SkillsUSA weights)", "Exported " + new Date().toDateString(), ""];
      inputs.forEach(function (i) {
        var name = i.closest("tr").querySelector("th").textContent.trim();
        lines.push(name + ": " + clamp(i) + " / " + i.max);
      });
      lines.push("", "Total: " + (total ? total.textContent : ""));
      var note = root.querySelector("textarea");
      if (note && note.value.trim()) lines.push("", "Evidence notes:", note.value.trim());
      download("skillsusa-practice-score.txt", lines.join("\n") + "\n");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wrapTables();
    markDates();
    checklist();
    scorecard();
  });
})();
