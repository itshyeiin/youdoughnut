/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE HEADER
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// SCROLL UP
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ACTIVE LINK
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// GSAP ANIMATION
TweenMax.from('.home__title', 1, {delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__description', 1, {delay: 0.3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__button', 1, {delay: 0.4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.main-donut', 1, {delay: 0.6, opacity: 0, y: -800, ease: Expo.easeInOut})

TweenMax.from('.home__donut1', 1, {delay: 1.2, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__donut2', 1, {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})

TweenMax.from('.home__donuts:nth-child(1)', 1, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__donuts:nth-child(2)', 1, {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})


// SCROLL REVEAL ANIMATION
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 500,
    // reset: true
})

sr.reveal(`.about__title`, {delay: 600})
sr.reveal(`.about__img`,{origin: 'left'})
sr.reveal(`.one`,{origin: 'right'})
sr.reveal(`.two`,{origin: 'left'})
sr.reveal(`.three`,{origin: 'bottom'})
sr.reveal(`.about__donuts:nth-child(1)`,{origin: 'bottom'})
sr.reveal(`.about__donuts:nth-child(2)`,{origin: 'top'})
sr.reveal(`.about__donuts:nth-child(3)`,{origin: 'right'})


// sr.reveal(`.mv__card, .section__title-center , .officers__card, .footer`,{interval: 100})
