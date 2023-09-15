function toggleTheme(toggleButton) {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    window.localStorage.setItem('prefers-theme', 'light');
    if (toggleButton) {
      toggleButton.setAttribute('aria-pressed', false);
      toggleButton.setAttribute('aria-label', 'Activate Dark Mode');
    }
  } else {
    document.body.classList.add('dark');
    window.localStorage.setItem('prefers-theme', 'dark');
    if (toggleButton) {
      toggleButton.setAttribute('aria-pressed', true);
      toggleButton.setAttribute('aria-label', 'Activate Light Mode');
    }
  }
}

document.querySelector('.dark-mode-toggle').addEventListener('click', (e) => {
  toggleTheme(e.target);
})

const localPreference = window.localStorage.getItem('prefers-theme');

if (localPreference) {
  if (localPreference === 'light') document.body.classList.remove('dark');
  else document.body.classList.add('dark');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.body.classList.add('dark');
}