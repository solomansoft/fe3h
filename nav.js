/* Shared top-nav module. Single source of truth for the header on every page.
 * Each page loads this via <script src="<path-to-root>/nav.js"></script>.
 * It derives the site root from its own URL, so links work at any folder depth,
 * then replaces (or inserts) the <nav class="top"> header.
 * Fully static — GitHub Pages compatible (no server-side includes). */
(function () {
  var self = document.currentScript;            // valid because loaded non-deferred
  if (!self) return;                            // no fallback needed; static nav stays
  var root = self.src.replace(/nav\.js(?:\?.*)?$/, '');  // dir containing nav.js = site root

  var LINKS = [
    ["⌂ Home", "index.html"],
    ["facts", "facts/index.html"],
    ["suggestions", "suggestions/index.html"],
    ["★ Route Plans V2", "suggestions/routesV2/index.html"],
    ["Skills", "facts/skills-技能.html"],
    ["Battalions", "facts/battalions-营队.html"]
  ];

  var html = LINKS.map(function (l) {
    return '<a href="' + root + l[1] + '">' + l[0] + "</a>";
  }).join(" ");

  function apply() {
    var nav = document.querySelector("nav.top");
    if (!nav) {                                 // page had no nav — insert one
      nav = document.createElement("nav");
      nav.className = "top";
      if (document.body) document.body.insertBefore(nav, document.body.firstChild);
    }
    nav.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
