const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a') 

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

    if(this.window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewhwwl: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
 });

 const scrollReveal = ScrollReveal({
    origin: 'top',
    distance:'30px',
    duration: '700',
    reset: true
 })

 scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand footer .social
    `,
    {interval: 100 }
 )
 
 const backToTopButton = document.querySelector('.back-to-top')

 function backToTop() {

    if(this.window.scrollY >= 1000) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
 }

  const sections = document.querySelectorAll('main section[id]')
  function activeMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.remove('active')
        }
    }



  }

   


 window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activeMenuAtCurrentSection()
 })


