function colorThemeFunction() {
    const savedTheme = localStorage.getItem('theme');
    const savedCheckboxState = localStorage.getItem('checkbox') === 'true';
    const headlineIMG = document.querySelector('.headlineIMG');

    if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
    }

//here i am making a function that saves the theme in the local storage, so that when the user refreshes the page, it wont go back to the default "darktheme".

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