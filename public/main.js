// COMPREHENSIVE FUNCTIONS 
{
    function changePage(page) {
        var pageValue = page.getAttribute('page');
        document.querySelectorAll('.page').forEach(btn => {
            if (btn.classList.contains(pageValue)) {
                btn.classList.remove('hidden')
            } else {
                btn.classList.add('hidden')
            }
        })
    }
}

// PRODUCT FUNTION
{
    document.querySelector('a[page="page-product"]').addEventListener('click', () => {
        filter(document.querySelector('.product-option_button[filter="all"]'))
    })
    document.querySelectorAll('.nav-product-item').forEach(btn => {
        btn.addEventListener('click', function () {
            event.preventDefault();
            changePage(document.querySelector('.nav-product a'))
            var filterValuebtn = btn.getAttribute('filter');
            var button = document.querySelector(`.product-option_button[filter="${filterValuebtn}"]`)
            filter(button)
        })
    })
    function filter(button) {
        var filterValue = button.getAttribute('filter');
        if (filterValue === 'all') {
            document.querySelectorAll('.product-option_button').forEach(btn => btn.classList.remove('selected'));
            document.querySelectorAll('.page-product-item').forEach(option => {
                option.classList.remove('hidden');
            })
            button.classList.add('selected')
        }
        else {
            document.querySelectorAll('.product-option_button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected')
            document.querySelectorAll('.page-product-item').forEach(btn => {
                if (btn.classList.contains(filterValue)) {
                    btn.classList.remove('hidden')
                }
                else {
                    btn.classList.add('hidden')
                }
            })
        }
    }
}



// SEARCH FUNTIONS
{
    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !searchBtn.contains(event.target)) {
            searchInput.style.display = 'none'
            searchBtn.style.color = '#FFFFFFa6'
        }
    })
    searchBtn = document.querySelector('.search-button');
    searchInput = document.querySelector('.search-input');
    searchBtn.addEventListener('click', openSearch);
    function openSearch() {
        searchInput.style.display = 'inline-block'
        searchBtn.style.color = '#000'
        searchInput.focus()
    }
}