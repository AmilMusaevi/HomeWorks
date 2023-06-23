let circle = document.querySelector('.circle');
let circleCntnr = document.querySelector('.circleCntnr');
circleCntnr.addEventListener('click', ()=>{
    circle.classList.toggle("circleToRight");
    circleCntnr.classList.toggle('circleToRightCntnr');
    document.body.classList.toggle('bgBlack');
  })