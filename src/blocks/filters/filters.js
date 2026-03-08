
(() => {

    const filters = document.querySelector('.filters');
    if (!filters) return;

    const items = filters.querySelectorAll('.filters__item');

    const btn = document.querySelector('[data-filters-open]');
    btn.addEventListener('click', () => {
        filters.classList.toggle('active');
    });

    const closeBtn = document.querySelector('.filters__close');
    closeBtn.addEventListener('click', () => {
        filters.classList.remove('active');
    });

    items.forEach(item => {
        const itemTop = item.querySelector('.filters__item-top');
        itemTop.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    const filtersSort = document.querySelector('.filters__sort');


    filtersSort.addEventListener('click', () => {
        const items = filtersSort.querySelectorAll('.filters__sort-item');
        const activeItem = filtersSort.querySelector('.filters__sort-item.active');

        let nextIndex = 0;

        if (activeItem) {
            const currentIndex = [...items].indexOf(activeItem);
            activeItem.classList.remove('active');

            nextIndex = (currentIndex + 1) % items.length;
        }

        items[nextIndex].classList.add('active');
    });


})();
