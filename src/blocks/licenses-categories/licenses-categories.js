(() => {

    const licensesCategories = document.querySelector('.licenses-categories');

    if(!licensesCategories) return;

    const accordeons = licensesCategories.querySelectorAll('.licenses-accordeon');

    accordeons.forEach(accordeon => {
        const title = accordeon.querySelector('.licenses-accordeon__title');

        title.addEventListener('click', () => {
            accordeon.classList.toggle('active');
        });

    });

})();
