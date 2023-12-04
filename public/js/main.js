window.addEventListener('load', () => {
    document.querySelectorAll('.btn-menu').forEach((button) => {
        button.addEventListener('click', () => {
            document.querySelector('.menu').classList.toggle('active')
        })
    })

    let isScrolling;
    isSticky()

    window.addEventListener('scroll', () => {
        isSticky()
    });
    function isSticky() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            document.querySelector('#sticky').classList.toggle('sticky', window.scrollY > 0);
        }, 66);
    }


    let sliderActive = 0;
    const SLIDER_ITEMS = document.querySelectorAll('.hero-slider li')
    const SLIDER_LENGTH = SLIDER_ITEMS.length - 1

    document.querySelector('#slider-prev').addEventListener('click', () => {
        document.querySelector('.hero-slider li.active').classList.remove('active')
        sliderActive--
        if (sliderActive < 0) {
            sliderActive = SLIDER_LENGTH
        }
        SLIDER_ITEMS[sliderActive].classList.add('active')
    })
    document.querySelector('#slider-next').addEventListener('click', () => {
        document.querySelector('.hero-slider li.active').classList.remove('active')
        sliderActive++
        if (sliderActive > SLIDER_LENGTH) {
            sliderActive = 0
        }
        SLIDER_ITEMS[sliderActive].classList.add('active')
    })
})
