// start header button 
const button = document.querySelector('nav a.list-icon');
const sidePar = document.querySelector('.side-par');
const closer =  document.querySelector('.side-par .side-head i');
button.addEventListener('click',function(){
    sidePar.classList.toggle('d-none');
});
closer.addEventListener('click',function(){
    sidePar.classList.add('d-none');
});

const dropDownButton = document.querySelectorAll('.side-par .side-ul ul li a button i');
dropDownButton.forEach(function(ele){
    ele.addEventListener('click',function(){
        
    });
})



// start section tow 
const imges = 
['overlay-img-1.jpg','overlay-img-2.jpg','overlay-img-3.jpg']
const texts = 
['Architecture','Interior Design','Design Artists'];

let section = document.getElementById('background');
let title = document.getElementById('title-tow');
section.style.backgroundImage = 'url(assets/img/overlay-imges/' + imges[0] + ')';
let counter = 0;
setInterval(function () {
    if(counter < 2 ){
        counter ++;
    }else{
        counter = 0; 
    }
    section.style.backgroundImage = 'url(assets/img/overlay-imges/' + imges[counter] + ')';
    title.textContent = texts[counter];
},3000)
// end section tow 

 

/* start counter section ================================================================================================ */
let nums = Array.from(document.querySelectorAll('.counter-section .num'));
let counterSection = document.querySelector('.counter-section')
let started = false;

window.onscroll = function(){
    if(window.scrollY >= counterSection.offsetTop){
        if(!started){
            nums.forEach((num)=> startCount(num));
        }
        started = true;
    }
}

function startCount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval( ()=> {
        ele.textContent++; 
        if(ele.textContent == goal){
            clearInterval(count);
        }
    },5000 / goal)
}

/* end   counter section ================================================================================================ */
