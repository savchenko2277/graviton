(() => {

    const header = document.querySelector(".header");

    if(!header) return;

    const headerBtn = header.querySelector(".header__btn");
    const headerCatalog = header.querySelector(".header__catalog");

    headerBtn.addEventListener("click", () => {
        headerBtn.classList.toggle("active");
        headerCatalog.classList.toggle("active");
    });

    const setCatalog = () => {
        const catalogListItems = header.querySelectorAll(".header__catalog-list-item");
        const catalogSections = header.querySelectorAll(".header__catalog-section");

        catalogListItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                catalogListItems.forEach(item => item.classList.remove("active"));
                item.classList.add("active");
                catalogSections.forEach(section => section.classList.remove("active"));
                catalogSections[index].classList.add("active");
            });
        });
    }

    setCatalog();

})();
