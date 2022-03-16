
// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[data-smooth="smooth"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
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
