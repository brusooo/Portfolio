//Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Navigation Menu
let navigationBtn = document.querySelectorAll('.navigationBtn');

function activeLink(){
    navigationBtn.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
navigationBtn.forEach((item) => item.addEventListener('click' , activeLink));



function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");

    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
}


//Bar Width
let perArr = [90,83,65,20,70,3,10,50]
window.addEventListener('scroll',reveal)
function reveal(){

    const skillsContainer = document.querySelector('.skillsContainer');
    
    const windowHeight = window.innerHeight;
    const revealTop = skillsContainer.getBoundingClientRect().top;
    const revealPoint = 320;
    
    if(revealTop < windowHeight - revealPoint){
        const percentage = document.querySelectorAll('.percentage');
        const percent    = document.querySelectorAll('.percent');
        for(let i=0;i<percentage.length;i++){
            percent[i].classList.add('active');
            percentage[i].style.width = perArr[i]+'%'; 
        }
    }
}

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 4000,
    autoplay: true,
    loop:true
});
            

//PreLoader
let loader = document.querySelector('.loader');
window.addEventListener("load" , setTimeout(()=> loader.style.display = "none" , 3000)
);
