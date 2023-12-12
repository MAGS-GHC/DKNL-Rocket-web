function colorThemeFunction() {
    const savedTheme = localStorage.getItem('theme');
    const savedCheckboxState = localStorage.getItem('checkbox') === 'true';

    if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
    }

    const checkbox = document.getElementById('checkbox');
    const themeToggleText = document.querySelector('.themeChangeText');
    if (checkbox) {
        checkbox.checked = savedCheckboxState;
        checkbox.addEventListener('change', () => {
            document.documentElement.classList.toggle('light-theme');
            localStorage.setItem('theme', document.documentElement.classList.contains('light-theme') ? 'light-theme' : 'dark-theme');
            localStorage.setItem('checkbox', checkbox.checked);

            if (document.documentElement.classList.contains('light-theme')) {
                themeToggleText.textContent = 'Turn on darkmode';
            } else {
                themeToggleText.textContent = 'Turn on lightmode';
            }
        });
    }

    document.body.style.display = "block";
}