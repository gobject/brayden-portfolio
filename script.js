// ===== Dark/Light Mode Toggle =====
// This saves user preference in localStorage so theme persists
const toggleBtn = document.getElementById('theme-toggle');

// Check saved preference on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});