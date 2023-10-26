const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navBtn = document.querySelector('.open-nav')

let lastScrollPosition = 0;
function scrollPosition() {
   const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
   
   if (currentScrollPosition > lastScrollPosition) {
      nav.classList.add("disappear")
   } else {
      nav.classList.remove("disappear")
   }
   lastScrollPosition = currentScrollPosition;
}

navBtn.addEventListener('click', () => {
   body.classList.toggle('open')
})

window.addEventListener('scroll', function() {
   scrollPosition()
   body.classList.remove('open')
   if (window.scrollY >= 200) {
      body.classList.add("nav-design")
   }
   else if(window.screenY < 200) {
      body.classList.remove("nav-design")
   }
});
