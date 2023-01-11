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
TweenMax.from('.home__title', 1, {delay: 1.7, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__description', 1, {delay: 1.8, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.button', 1, {delay: 1.9, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__img', 1, {delay: 2.1, opacity: 0, y: -800, ease: Expo.easeInOut})

TweenMax.from('.home__donut-1', 1, {delay: 2.7, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__donut-2', 1, {delay: 2.9, opacity: 0, y: -800, ease: Expo.easeInOut})

TweenMax.from('.home__donut-3', 1, {delay: 3.1, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__donut-4', 1, {delay: 2.9, opacity: 0, y: -800, ease: Expo.easeInOut})

// POPUP - SCREEN
const popupScreen = document.querySelector(".popup-screen");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
    setTimeout(() => {
        popupScreen.classList.add("active");
    }, 2000)
})

closeBtn.addEventListener("click", () =>{
    popupScreen.classList.remove("active");
    document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60;

});

const WebsiteCookie = document.cookie.indexof("WebsiteName=");
if(WebsiteCookie != 1){
    popupScreen.style.display = "none";
}

else{
    popupScreen.style.display = "flex";
}

// SCROLL REVEAL ANIMATION
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 500,
    // reset: true
})

// sr.reveal(`.home__img`,{origin: 'top'})
// sr.reveal(`.home__title`,{origin: 'bottom'})
// sr.reveal(`.home__description`,{origin: 'bottom'})
// sr.reveal(`.button`,{origin: 'bottom'})

// sr.reveal(`.home__donut-1`,{origin: 'bottom'})
// sr.reveal(`.home__donut-2`,{origin: 'right'})
// sr.reveal(`.home__donut-3`,{origin: 'bottom'})
// sr.reveal(`.home__donut-4`,{origin: 'left'})

sr.reveal(`.about__title`, {delay: 600})
sr.reveal(`.about__img`,{origin: 'left'})
sr.reveal(`.about__description:nth-child(1)`,{origin: 'right'})
sr.reveal(`.about__description:nth-child(2)`,{origin: 'left'})
sr.reveal(`.about__description:nth-child(3)`,{origin: 'bottom'})
sr.reveal(`.about__donut-1`,{origin: 'bottom'})
sr.reveal(`.about__donut-2`,{origin: 'top'})
sr.reveal(`.about__donut-3`,{origin: 'right'})


sr.reveal(`.products__title, .product__card, .footer, .footer__logo img, .footer__social`,{interval: 200})
sr.reveal(`.about_description, .about__donut-1, .about__donut-2, .about__donut-3`,{interval: 200})
