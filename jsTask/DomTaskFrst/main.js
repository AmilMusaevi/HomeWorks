/* Task 1:
Change Background Color
Create an HTML file with a button. When the button is clicked,
change the background color of the page to a random color. */
let btn = document.querySelector('.btn');
console.log(btn);
function changeBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
}
btn.addEventListener('click',changeBg);

/* Task 2: Create an HTML file with a button and a counter display.
 When the button is clicked, increment the counter and update the display. */
 let btnCntr = document.querySelector('.btnCntr');
let cntrDsp = document.querySelector('.cntrDsp')
 console.log(btnCntr);

 let count = 0;

 btnCntr.addEventListener('click', ()=>{
    count++;
    updateDisplay();
 })
 function updateDisplay (){
    cntrDsp.innerHTML=count;
 }

 /* Task 3: Create an HTML element for the image tag and show the screen an image then create a button 
 in HTML and write a function in js for button click.
  When click the button change the image source(src) attribute */

  let imgBtn = document.querySelector('.imgBtn')
  let myImg = document.querySelector('.myImg')

  imgBtn.addEventListener('click', ()=>{
       myImg.setAttribute('src','img2.png')
  })