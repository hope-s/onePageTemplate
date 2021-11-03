const text ='یک قالب حرفه ای تک صفحه ای ساخته شده با بوت استرپ 5';
let indexOf = 0;

function writer() {
    document.getElementById('writer').innerText = text.slice(0, indexOf);
    indexOf++;
    // if (indexOf==text.length){
    //     indexOf = 0;
    // }
}
setInterval(writer,100)

//sticky-nav
var header = document.getElementById('nav-sticky');
var sticky = header.offsetTop;
window.onscroll = function(){
  if(window.pageYOffset > sticky) {
    header.classList.add('sticky-nav');
    header.classList.add('bg-dark')
    header.classList.add('mt-0')

  }else {
    header.classList.remove('sticky-nav');
    header.classList.remove('bg-dark')
    header.classList.remove('mt-0')
  }
    // scroll top
    let src = document.querySelector('.scroll-top');
    if(window.pageYOffset > 200){
        src.classList.add('scroll-visible');
    }
    else{
        src.classList.remove('scroll-visible');
    }

}

// dark theme
const darkToggle = document.querySelector('.toggle-theme');
const darkBtn = document.querySelector('.darkMode-icon');
const body = document.querySelector('body');
darkToggle.addEventListener('click',darkFunc)
function darkFunc() {
    body.classList.toggle('dark')
    darkBtn.classList.toggle('fa-sun')
}

// menu

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#my-menu", {
            "extensions": [
            "theme-dark",
            "position-left",
            "position-front",
            ]
        });
    }
);

