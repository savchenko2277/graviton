import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { driveTabs } from "../../js/libs/driveTabs";

(() => {

    const details = document.querySelector('.details');
    if (!details) return;

    const mainPhoto = details.querySelector('.details__gallery-photo img');

    const swiper = new Swiper('.details__gallery-swiper', {
        modules: [Navigation],
        slidesPerView: 5,
        spaceBetween: 24,
        direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.details__gallery-next',
            prevEl: '.details__gallery-prev',
        },
        on: {
            init(swiper) {
                setMainPhoto(swiper.slides[swiper.activeIndex]);
            },
            slideChange(swiper) {
                setMainPhoto(swiper.slides[swiper.activeIndex]);
            }
        }
    });

    function setMainPhoto(slide) {
        const img = slide.querySelector('img');
        if (img) {
            mainPhoto.src = img.src;
        }
    }

    details.querySelector('.details__gallery-swiper')
        .addEventListener('click', (e) => {

            const slide = e.target.closest('.swiper-slide');
            if (!slide) return;

            const realIndex = slide.dataset.swiperSlideIndex;
            if (realIndex === undefined) return;

            swiper.slideToLoop(realIndex);
        });


    const tabs = driveTabs({ container: '.details__tabs', controls: '.details__tabs-navigation-btn', selects: '.details__block', cls: 'active' });

})();
