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

// GSAP ANIMATION
TweenMax.from('.home__title', 1, {delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__description', 1, {delay: 0.3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__button', 1, {delay: 0.4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.main-donut', 1, {delay: 0.6, opacity: 0, y: -800, ease: Expo.easeInOut})

TweenMax.from('.home__donut1', 1, {delay: 1.2, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__donut2', 1, {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})

TweenMax.from('.home__donuts:nth-child(1)', 1, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__donuts:nth-child(2)', 1, {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})

// TweenMax.from('.one', 1, {delay: 0.4, opacity: 0, x: 800, ease: Expo.easeInOut})
// TweenMax.from('.two', 1, {delay: 0.6, opacity: 0, x: -800, ease: Expo.easeInOut})
// TweenMax.from('.three', 1, {delay: 0.8, opacity: 0, y: 800, ease: Expo.easeInOut})

// SCROLL REVEAL ANIMATION
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 500,
    // reset: true
})

// sr.reveal(`.home__data`)
// sr.reveal(`.home__img`, {delay: 500})
// sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img`,{origin: 'right'})
sr.reveal(`.one`,{origin: 'left'})
sr.reveal(`.two`,{origin: 'right'})
sr.reveal(`.three`,{origin: 'left'})

// sr.reveal(`.about__data`,{origin: 'right'})
// sr.reveal(`.mv__card, .section__title-center , .officers__card, .footer`,{interval: 100})
