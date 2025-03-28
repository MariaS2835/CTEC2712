document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const searchBtn = document.getElementById('search-btn');
   
    // Toggle the dropdown menu
    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Search bar functionality
    searchBtn.addEventListener('click', () => {
        let existingSearchBar = document.querySelector('.search-bar');
        if (!existingSearchBar) {
            const searchBar = document.createElement('input');
            searchBar.type = 'text';
            searchBar.className = 'search-bar';
            searchBar.placeholder = 'Search...';
            searchBar.style.position = 'absolute';
            searchBar.style.top = '88px';
            searchBar.style.right = '20px';
            searchBar.style.padding = '8px';
            searchBar.style.border = '2px solid black';
            document.body.appendChild(searchBar);
        }
    });
});