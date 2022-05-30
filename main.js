//MENU RESPONSIVE
const menuBtn = document.querySelector('#btn-menu');
const menuResponsive = document.querySelector('.menu-responsive-off');

menuBtn.addEventListener('click',()=>{
    menuResponsive.classList.toggle('menu-responsive-on')
});


//SLIDER PRINCIPAL
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'margin-left .7s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    },700)
}

function prev(){
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'margin-left .7s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = '-100%';
    },700)
}

btnRight.addEventListener('click',function(){
    next();
});

btnLeft.addEventListener('click',function(){
    prev();
});


// TAPA LOS BTNS DEL SLIDER CUANDO SE ACTIVA EL MENU
/*menuBtn.addEventListener('click',()=>{
    btnLeft.style.display = 'none';
    btnRight.style.display = 'none';
});
menuBtn.addEventListener('mouseout',()=>{
    btnLeft.style.display = 'inline';
    btnRight.style.display = 'inline';
});*/