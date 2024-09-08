document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        const menuId = button.getAttribute('data-menu');
        const dropdownMenu = document.getElementById(menuId);

        // 添加点击事件到按钮
        button.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDropdownMenu(dropdownMenu);
        });

        // 添加点击事件到下拉菜单
        dropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡到窗口
        });

        // 添加点击事件到窗口
        window.addEventListener('click', function(e) {
            if (dropdownMenu.style.display === 'flex' && !button.contains(e.target) && !dropdownMenu.contains(e.target)) {
                closeDropdownMenu(dropdownMenu);
            }
        });

        function toggleDropdownMenu(menu) {
            if (dropdownMenu.style.display === 'flex') {
                closeDropdownMenu(menu);
            } else {
                openDropdownMenu(menu);
            }
        }

        function openDropdownMenu(menu) {
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
        }

        function closeDropdownMenu(menu) {
            menu.style.display = 'none';
        }
    });
});