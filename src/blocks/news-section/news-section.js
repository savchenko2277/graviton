import { driveTabs } from "../../js/libs/driveTabs";

(() => {

    const newsSection = document.querySelector('.news-section');

    if(!newsSection) return;

    const tabs = driveTabs({
        container: '.news-section__container',
        controls: '.news-section__navigation-btn',
        selects: '.news-section__tab',
        cls: 'active',
    });

})();
