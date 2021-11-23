const menuMobile = document.querySelector('.menuMobile')
const btnToggleMenu = document.querySelector('.btnToggleMenu')
const closeSidenav = document.querySelector('.closeSidenav')
const serachContainer = document.querySelector('.search-container input')
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
const toggleSidebar = document.querySelector('.toggleSidebar')
const openSidebar = document.querySelector('.openSidebar')

if(toggleSidebar){
  toggleSidebar.addEventListener('click',function(){
    sidebarWrapper.classList.remove('d-lg-flex')
    openSidebar.classList.remove('d-none')
  })
  openSidebar.addEventListener('click',function(){
    sidebarWrapper.classList.add('d-lg-flex')
    openSidebar.classList.add('d-none')
  })
}

btnToggleMenu.addEventListener('click',function () {
  menuMobile.classList.add('show')
})
closeSidenav.addEventListener('click',function () {
  menuMobile.classList.remove('show')
})

serachContainer.addEventListener('focus',function () {
  this.parentElement.classList.add('focused')
})
serachContainer.addEventListener('blur',function () {
  this.parentElement.classList.remove('focused')
})




$('._notable-wrapper').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows:false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerMode: true,
        infinite: true,
        centerPadding: '20px',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});