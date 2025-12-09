

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle-btn');
  

  const currentTheme = localStorage.getItem('codequest-theme') || 'dark';
  
  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) {
      themeToggle.textContent = 'Dark Mode';
    }
  } else {
    if (themeToggle) {
      themeToggle.textContent = 'Light Mode';
    }
  }
  

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('light-mode');
      
      if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('codequest-theme', 'light');
      } else {
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('codequest-theme', 'dark');
      }
    });
  }
});
