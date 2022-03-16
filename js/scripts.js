// Header Background on scroll
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 40) document.querySelector('.js-header').classList.add('active');
    if (window.pageYOffset < 40) document.querySelector('.js-header').classList.remove('active');
})

// Intro title typing
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[data-smooth="smooth"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(smoothLink);
        const id = smoothLink.getAttribute('href');
        mainNavigation.classList.remove('active');
        showScroll();
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Burger
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.burger').addEventListener('click', () => {
    mainNavigation.classList.add('active');
    hideScroll();
});

document.querySelector('.burger-menu__close').addEventListener('click', () => {
    mainNavigation.classList.remove('active');
    showScroll();
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
    mainNavigation.classList.remove('active');
    showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarWidth;
}

var swiper = new Swiper(".projectSwiper", {
    loop: true,
    loopedSlides: 8,
    slidesPerView: "auto",
    spaceBetween: 20,

    autoplay: {
        delay: 4000,
    },
});


var swiper = new Swiper(".blogSwiper", {
    loop: true,
    loopedSlides: 8,
    slidesPerView: "auto",

    breakpoints: {
        575: {
            spaceBetween: 0,
        },

        320: {
            spaceBetween: 20,
        },
    },
});