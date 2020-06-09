const html = /* html */`
  <button aria-label="Dark mode toggle" onclick="toggleTheme()" class="dark-mode-toggle">
    <span class="sun"> <img alt="sun icon that represents light mode" width="35px" src="../icons/sun.svg" /></span>
    <span class="moon"><img alt="moon icon to represent dark mode " width="25px" src="../icons/moon.svg" /></span>
  </button>
`;

const css = /* css */`

/* DARK MODE SWITCH */
.dark-mode-toggle {
  cursor: pointer;
  float: right;
  border:none;
  background:transparent;
}
body:not(.user-is-tabbing) .dark-mode-toggle:focus {
  outline: none;
}
.dark-mode-toggle .moon {
  padding: 10px;
}
.dark-mode-toggle .sun {
  padding: 5px;
}
body .dark-mode-toggle .moon {display: none}
body .dark-mode-toggle .sun {display: inline-block}
body.dark .dark-mode-toggle .moon {display: inline-block;}
body.dark .dark-mode-toggle .sun {display: none;}
`


const inlinedJS = /* html */ `
<script>
function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    window.localStorage.setItem('prefers-theme', 'light');
  } else {
    document.body.classList.add('dark');
    window.localStorage.setItem('prefers-theme', 'dark');
  }
}

const localPreference = window.localStorage.getItem('prefers-theme');

if (localPreference) {
  document.body.classList.add(localPreference);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.body.classList.add('dark');
}
</script>
`.replace(/\<\/?script\>/g, '')

module.exports = {html, css, inlinedJS};