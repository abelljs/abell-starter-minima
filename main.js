import './global.css';

// tabbing user
window.addEventListener(
  "keydown",
  (e) => e.keyCode === 9 && document.body.classList.add("user-is-tabbing")
);