document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');
    const scrollToTopButton = document.getElementById('scrollToTop');

    toggleButton.addEventListener('click', function () {
        const isOpen = sidebar.style.left === '0px' || sidebar.style.left === '';
        sidebar.style.left = isOpen ? '-200px' : '0px';
        toggleButton.innerHTML = isOpen ? '&#9654;' : '&#9664;';
    });

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    scrollToTopButton.addEventListener('click', function() {
        scrollToTop();
    });

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});


