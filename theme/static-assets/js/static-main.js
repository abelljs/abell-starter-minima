/**
 * Common Static JS file
 */
window.addEventListener(
  "keydown",
  (e) => e.keyCode === 9 && document.body.classList.add("user-is-tabbing")
);

// Syntax highlight if hljs is imported
try {
  hljs.initHighlightingOnLoad();
} catch (err) {
  if (err.message !== "hljs is not defined") {
    throw err;
  }
}
