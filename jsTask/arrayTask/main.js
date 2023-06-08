let myData = [
    {
        name:'amil',
        surname:'musaevi',
        age:22,
        profession:'web developer',
        salary:2000,
        time:2019,
    },
    {
        name:'elnur',
        surname:'esgerov',
        age:24,
        profession:'designer',
        salary:2800,
        time:2021,
    },
    {
        name:'murad',
        surname:'muradov',
        age:20,
        profession:'mobile developer',
        salary:3000,
        time:2022,
    }
]

let getEmployeeData = function (data){
    let value='';
    for(let i=0;i<data.length;i++){
      value = `${data[i].name} ${data[i].surname} yash ${data[i].age} ${data[i].profession}`
      console.log(value);
    }
}
getEmployeeData(myData)

function getListArr(arr){
    arr.forEach(arr => {
        let result = `${arr.name} ${arr.surname} yash ${arr.age} ${arr.profession}`
        console.log(result);
    });
}
getListArr(myData)