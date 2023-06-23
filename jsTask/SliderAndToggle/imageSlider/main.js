let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn');
let img = document.querySelectorAll('.image');
let imgCntnr = document.querySelector('.imgCntnr')
console.log(imgCntnr);
let max = img.length-1;
console.log(img);
let counter=0;

const slideImage =()=>{
    img.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
leftBtn.addEventListener('click',
    ()=>{
    if(counter===0){
        counter=max;
        slideImage();
    }else{
        counter--;
        slideImage();
    }
})

rightBtn.addEventListener('click',rightToLeft)

function rightToLeft (){
    if(max>counter){
        counter++;
        slideImage();
    }
    else {
        counter=0;
        slideImage();
    }
}

let timer = setInterval(rightToLeft,3000);
imgCntnr.addEventListener('mouseover',
 ()=>{
    clearInterval(timer);
})
imgCntnr.addEventListener('mouseout',
 ()=> {
    timer = setInterval(rightToLeft,3000);
})

    