// window.onload = function() {
//     const savedTheme = localStorage.getItem('theme');
//     const savedCheckboxState = localStorage.getItem('checkbox') === 'true';

//     if (savedTheme) {
//         document.documentElement.classList.add(savedTheme);
//     }

//     const checkbox = document.getElementById('checkbox');
//     if (checkbox) {
//         checkbox.checked = savedCheckboxState;
//         checkbox.addEventListener('change', () => {
//             document.documentElement.classList.toggle('light-theme');
//             localStorage.setItem('theme', document.documentElement.classList.contains('light-theme') ? 'light-theme' : 'dark-theme');
//             localStorage.setItem('checkbox', checkbox.checked);
//         });
//     }
// }