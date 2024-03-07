document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');
    const scrollToTopButton = document.getElementById('scrollToTop');
    // メニューアイテムのリンク要素を取得
    const menuItems = document.querySelectorAll("#sidebar nav ul li a");

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


    // 各メニューアイテムにクリックイベントを追加
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // クリックされたリンクのhref属性から対応するセクションのIDを取得
            const targetId = item.getAttribute('href').substring(1);

            // 対応するセクションの要素を取得
            const targetElement = document.getElementById(targetId);

            // セクションが存在する場合にスクロールを実行
            if (targetElement) {
                // スクロール位置を計算
                const offsetTop = targetElement.offsetTop;

                // スクロールアニメーション
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // メニューを閉じる
                sidebar.style.left = '-200px';
                toggleButton.innerHTML = '&#9654;';
            }
        });
    });
});


