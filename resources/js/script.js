

// SELECTORS
const header = document.querySelector('header')
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('nav a');
const logo = document.querySelector('.navbar-brand img');
const workSection = document.querySelector('.works-section');
const iphone = document.querySelector('.app-container img');


// get initial navBar height
const navHeight = navBar.getBoundingClientRect()

// OBSERVERS
// navBar Observer
let options = {
  root: null,
  rootMargin: `-${navHeight.height}px`,
  threshold:0,

}
const mobileNav = (entries)=>{
  if(!entries[0].isIntersecting){
    navBar.classList.remove('bg-transparent','navbar-dark');
    navBar.classList.add('bg-light','fixed-top','navBar-light','shadow-lg');
    navLinks.forEach((link)=>{
      link.classList.remove('text-light');
      link.classList.add('text-dark');
    })
    logo.src = 'resources/css/images/logo.png'
  }else{
    navBar.classList.add('bg-transparent');
    navBar.classList.remove('bg-light','fixed-top','shadow-lg');
    navLinks.forEach((link)=>{
      link.classList.add('text-light');
      link.classList.remove('text-dark');
    })
    logo.src = 'resources/css/images/logo-white.png'
  }
}
let navBarObserver = new IntersectionObserver(mobileNav,options)
navBarObserver.observe(header)

// works-section Observer
const iphoneSlideUp = (entries)=>{
  if(entries[0].isIntersecting){
    iphone.classList.add('animate')
  }
}
let workSectionObserver = new IntersectionObserver(iphoneSlideUp,options)
workSectionObserver.observe(workSection)
