window.MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    processEscapes: true,
  },
  jax: ["input/TeX", "input/MathML", "input/AsciiMath", "output/CommonHTML"],
  extensions: [
    "tex2jax.js",
    "mml2jax.js",
    "asciimath2jax.js",
    "MathMenu.js",
    "MathZoom.js",
    "AssistiveMML.js",
    "[Contrib]/a11y/accessibility-menu.js",
  ],
  TeX: {
    extensions: [
      "AMSmath.js",
      "AMSsymbols.js",
      "noErrors.js",
      "noUndefined.js",
    ],
    equationNumbers: {
      autoNumber: "AMS",
    },
  },
});

// window.MathJax = {
//   tex: {
//     inlineMath: [["\\(", "\\)"]],
//     displayMath: [["\\[", "\\]"]],
//     processEscapes: true,
//     processEnvironments: true,
//   },
//   options: {
//     ignoreHtmlClass: ".*|",
//     processHtmlClass: "arithmatex",
//   },
// };

/* Enable below to use MathJax in Instant Loading mode */
document$.subscribe(() => {
  MathJax.typesetPromise();
});
