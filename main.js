(function (window, document) {
    'use strict'

    const toggleBtn = document.querySelector('.header_toggleBtn');
    const menu = document.querySelector('.header_menu');
    

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });


})(window, document)