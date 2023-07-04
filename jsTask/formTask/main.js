let inputName = document.querySelector('.inputName');
let inputPswrd = document.querySelector('.inputPswrd');
let inputText = document.querySelector('.inputText');
let btn = document.querySelector('.btn')
let form = document.querySelector('.form')
let table = document.querySelector('tBody')


let arr = [];
form.addEventListener('submit', (e)=>{
    e.preventDefault();
      function Student (username, password, text){
        this.username=username;
        this.password=password;
        this.text=text;
      }
      let student = new Student(inputName.value, inputPswrd.value, inputText.value);
      if(inputPswrd.value.trim().length>=8){
        arr.push(student);
      addUsers()
      }else{
        alert('Daxil edilən şifrə 8 simvoldan az olmamalıdır.')
      }
      inputName.value='';
      inputPswrd.value='';
      inputText.value='';
  })
  
  function addUsers (){
    table.innerHTML = "";
    arr.map((user)=>{
    table.innerHTML +=`
<tr>
<td>${user.username}</td>
<td>${user.password}</td>
<td>${user.text}</td>
</tr>`
  })
}
