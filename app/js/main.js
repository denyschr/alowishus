// BASE
const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItems = nav.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
	burger.classList.toggle('burger--active');
	nav.classList.toggle('nav--active');
	body.classList.toggle('noscroll');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		burger.classList.remove('burger--active');
		nav.classList.remove('nav--active');
		body.classList.remove('noscroll');
	});
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 1023.98) {
		nav.classList.remove('nav--active');
		body.classList.remove('noscroll');
		burger.classList.remove('burger--active');
	}
});


// ANIMATIONS
gsap.config({
	nullTargetWarn: false,
});
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
const mm = gsap.matchMedia();
const tlHeroCup = gsap.timeline({
	defaults:
		{ duration: .2 },
	repeat: -1,
	repeatDelay: 3
});

tlHeroCup
	.to('#cup', { rotate: 5 })
	.to('#cup', { rotate: -5 })
	.to('#cup', { rotate: 5 })
	.to('#cup', { rotate: -5 })
	.to('#cup', { rotate: 0 });

mm.add("(min-width: 1024px)", () => {
	tl.fromTo('.hero__title .hero__title-span', {
		yPercent: 40,
		autoAlpha: 0
	},
		{
			yPercent: 0,
			autoAlpha: 1,
			duration: 0.7,
			stagger: 0.20
		}
	)
		.fromTo('.hero__text', {
			yPercent: 20,
			autoAlpha: 0
		},
			{
				yPercent: 0,
				autoAlpha: 1,
				duration: 0.5
			},
			'-=0.2'
		)
		.fromTo('.hero-relative__item', {
			yPercent: -20,
			autoAlpha: 0
		},
			{
				yPercent: 0,
				autoAlpha: 1,
				duration: 0.7
			},
			'-=0.2'
		)
		.fromTo('.hero-relative__img', {
			yPercent: 40,
			autoAlpha: 0
		},
			{
				yPercent: 0,
				autoAlpha: 1,
				duration: 0.6
			},
			'-=0.2'
		)
		.fromTo('.hero__button', {
			scale: 0
		},
			{
				scale: 1,
				duration: 0.8
			},
			'-=0.2'
		)
		.fromTo('.hero__link', {
			xPercent: 20,
			autoAlpha: 0
		},
			{
				xPercent: 0,
				autoAlpha: 1,
				duration: 0.8
			},
			'-=0.2'
		)
	gsap.from('.order__img', {
		scrollTrigger: {
			trigger: '.order',
			start: '-15% center'
		},
		yPercent: 50,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.order__title', {
		scrollTrigger: {
			trigger: '.order',
			start: 'top center'
		},
		yPercent: 40,
		autoAlpha: 0,
		duration: 1,
	}
	)
	gsap.from('.order__text', {
		scrollTrigger: {
			trigger: '.order',
			start: '20% center'
		},
		yPercent: 40,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.order__button', {
		scrollTrigger: {
			trigger: '.order',
			start: '30% center'
		},
		xPercent: 40,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.app__title', {
		scrollTrigger: {
			trigger: '.app',
			start: '-10% center'
		},
		xPercent: 80,
		yPercent: 80,
		autoAlpha: 0,
		duration: 1,
	}
	)
	gsap.from('.app__text', {
		scrollTrigger: {
			trigger: '.app',
			start: '15% center'
		},
		xPercent: 70,
		yPercent: 70,
		autoAlpha: 0,
		duration: 1,
	}
	)
	gsap.from('.app-relative', {
		scrollTrigger: {
			trigger: '.app',
			start: '-10% center'
		},
		yPercent: 40,
		autoAlpha: 0,
		duration: 0.8,
	}
	)
	gsap.from('.app__button', {
		scrollTrigger: {
			trigger: '.app',
			start: '30% center'
		},
		xPercent: 60,
		yPercent: 60,
		autoAlpha: 0,
		duration: 1,
	}
	)
	gsap.from('.testimonials__slider', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '-10% center'
		},
		x: -50,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.testimonials__title', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: 'top center'
		},
		x: -30,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.testimonials-box__estimation', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '10% center'
		},
		scale: 0,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.testimonials-box .testimonials-rating__item', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '10% center'
		},
		scale: 0,
		autoAlpha: 0,
		stagger: 0.15,
		duration: 0.5
	}
	)
	gsap.from('.testimonials-box__caption', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '10% center'
		},
		scale: 0,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.slider-nav', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '15% center'
		},
		x: -30,
		autoAlpha: 0,
		duration: 0.7
	}
	)
});

mm.add("(max-width: 1023.98px)", () => {
	tl.fromTo('.hero-relative__item', {
		yPercent: -40,
		autoAlpha: 0
	},
		{
			yPercent: 0,
			autoAlpha: 1,
			duration: 1
		}
	)
		.fromTo('.hero-relative__img', {
			yPercent: 50,
			autoAlpha: 0
		},
			{
				yPercent: 0,
				autoAlpha: 1,
				duration: 1
			},
			'-=0.2'
		)
	gsap.from('.hero__title .hero__title-span', {
		scrollTrigger: {
			trigger: '.hero',
			start: '30% center'
		},
		xPercent: -20,
		autoAlpha: 0,
		stagger: 0.40,
		duration: 1
	},
	)
	gsap.from('.hero__text', {
		scrollTrigger: {
			trigger: '.hero',
			start: '50% center'
		},
		yPercent: 80,
		autoAlpha: 0,
		duration: 1
	},
	)
	gsap.from('.hero__button', {
		scrollTrigger: {
			trigger: '.hero',
			start: '80% center'
		},
		scale: 0,
		duration: 0.7
	},
	)
	gsap.from('.hero__link', {
		scrollTrigger: {
			trigger: '.hero',
			start: '80% center'
		},
		xPercent: 20,
		autoAlpha: 0,
		duration: 1.3
	},
	)
	gsap.from('.order__img', {
		scrollTrigger: {
			trigger: '.order',
			start: '-10% center'
		},
		yPercent: 50,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.order__title', {
		scrollTrigger: {
			trigger: '.order',
			start: '20% center'
		},
		yPercent: 40,
		autoAlpha: 0,
		duration: 1,
	}
	)
	gsap.from('.order__text', {
		scrollTrigger: {
			trigger: '.order',
			start: '40% center'
		},
		yPercent: 40,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.order__button', {
		scrollTrigger: {
			trigger: '.order',
			start: '60% center'
		},
		xPercent: 40,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.app-relative', {
		scrollTrigger: {
			trigger: '.app',
			start: '-10% center'
		},
		yPercent: 40,
		autoAlpha: 0,
		duration: 0.8,
	}
	)
	gsap.from('.app__title', {
		scrollTrigger: {
			trigger: '.app',
			start: '40% center'
		},
		x: 20,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.app__text', {
		scrollTrigger: {
			trigger: '.app',
			start: '60% center'
		},
		x: 20,
		autoAlpha: 0,
		duration: 0.7,
	}
	)
	gsap.from('.app__button', {
		scrollTrigger: {
			trigger: '.app',
			start: '70% center'
		},
		x: 30,
		autoAlpha: 0,
		duration: 1,
	}
	)
	gsap.from('.testimonials__title', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '-10% center'
		},
		x: -20,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.testimonials-box__estimation', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: 'top center'
		},
		x: -10,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.testimonials-box .testimonials-rating__item', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '10% center'
		},
		scale: 0,
		autoAlpha: 0,
		stagger: 0.15,
		duration: 0.5
	}
	)
	gsap.from('.testimonials-box__caption', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '10% center'
		},
		scale: 0,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.slider-nav', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '20% center'
		},
		y: 30,
		autoAlpha: 0,
		duration: 0.7
	}
	)
	gsap.from('.testimonials__slider', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '30% center'
		},
		x: -10,
		autoAlpha: 0,
		duration: 1
	}
	)
});

mm.add("(min-width: 320px)", () => {
	gsap.from('.option__title', {
		scrollTrigger: {
			trigger: '.option',
			start: '-10% center'
		},
		yPercent: 50,
		autoAlpha: 0,
		duration: 1
	}
	)
	gsap.from('.option__text', {
		scrollTrigger: {
			trigger: '.option',
			start: 'top center'
		},
		yPercent: 70,
		autoAlpha: 0,
		duration: 1
	}
	)
	gsap.from('.option__list .option__item', {
		scrollTrigger: {
			trigger: '.option',
			start: '15% center'
		},
		yPercent: 70,
		autoAlpha: 0,
		stagger: 0.40,
		duration: 1
	}
	)
	gsap.from('.products__title', {
		scrollTrigger: {
			trigger: '.products',
			start: '-10% center'
		},
		yPercent: 50,
		autoAlpha: 0,
		duration: 0.8
	}
	)
	gsap.from('.products__text', {
		scrollTrigger: {
			trigger: '.products',
			start: 'top center'
		},
		yPercent: 30,
		opacity: 0,
		duration: 0.7
	}
	)
	gsap.from('.products__list .products__item', {
		scrollTrigger: {
			trigger: '.products',
			start: '15% center'
		},
		scale: 0,
		opacity: 0,
		stagger: 0.50,
		duration: 0.8
	}
	)
});

// SLIDER
const swiper = new Swiper(".testimonials__slider", {
	slidesPerView: "1.8",
	spaceBetween: 35,
	loop: true,
	speed: 800,
	navigation: {
		nextEl: ".slider-nav__button--next",
		prevEl: ".slider-nav__button--prev",
		clickable: true,
	},
	breakpoints: {
		1470: {
			slidesPerView: "1.8",
			spaceBetween: 35,
		},
		1370: {
			slidesPerView: "1.7",
			spaceBetween: 30,
		},
		1230: {
			slidesPerView: "1.5",
		},
		1130: {
			slidesPerView: "1.3",
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: "1",
		},
		860: {
			slidesPerView: "2",
		},
		650: {
			slidesPerView: "1.7",
		},
		600: {
			slidesPerView: "1.5",
		},
		460: {
			slidesPerView: "1.3",
			spaceBetween: 15,
		},
		320: {
			slidesPerView: "1",
		},
	}
});
