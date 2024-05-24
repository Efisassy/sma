document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleSidebar');
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-content');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            toggleButton.textContent = 'Expand';
        } else {
            toggleButton.textContent = 'Collapse';
        }
    });

    // Initially expand the sidebar
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('collapsed');
    toggleButton.textContent = 'Collapse';
});


close


document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.sidebar-menu li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.forEach(function(el) {
                el.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});

