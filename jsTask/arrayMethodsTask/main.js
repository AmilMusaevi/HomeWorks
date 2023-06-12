const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];


  /* ***MAP***

1. Get the array of all names

2. Get the array of all heights

3. Get the array of objects with just name and height properties

4. Get the array of all first names */

// 1.
let getAllNames = persons.map((item)=>{
    return item.name;
})

console.log(getAllNames);

// 2.
let getAllHeights = persons.map((item)=>{
    return item.height;
})
console.log(getAllHeights);

// 3.
let getNameAndHeight = persons.map((item)=>{
    return `${item.name} ${item.height}`;
})
console.log(getNameAndHeight);
// 4.
let getName = persons.map((item)=>{
     return item.name
    })
console.log(getName);
let getFirstName = getName.map((item)=>{
    [first, ...rest] = item.split(" ")
    return first;
})
console.log(getFirstName);




/* ***FILTER***

1. Get characters with a mass greater than 100

2. Get characters with a height of less than 200

3. Get all male characters

4. Get all female characters */


// 1.
let getMass = persons.filter((item)=>{
    return Number(item.mass)>100
})
console.log(getMass);

// 2.
let getHeight = persons.filter((item)=>{
    return item.height<200
})
console.log(getHeight);

// 3.
let getMale = persons.filter((item)=>{
    return item.gender==='male'
})
console.log(getMale);

// 4.
let getFemale = persons.filter((item)=>{
    return item.gender==='female'
})
console.log(getFemale);

/* ***SORT***

1. Sort by mass

2. Sort by height

3. Sort by name

4. Sort by gender */


// 1.
let sortMass = persons.sort((a,b)=>a.mass-b.mass)
console.log(sortMass);

// 2.
let sortHeight = persons.sort((a,b)=>a.height-b.height)
console.log(sortHeight);

// 3

let sortName = persons.sort((a,b)=>{
    if(a.name>b.name){
        return 1
    } else if(b.name>a.name){
        return -1
    } 
    return 0
})

console.log(sortName);

// 4

let sortGender = persons.sort((a,b)=>{
if(a.gender>b.gender){
    return 1
} else if(a.gender<b.gender){
    return -1
}
return 0

})
console.log(sortGender);

/*  
***EVERY***

1. Does every character have blue eyes?

2. Does every character have a mass of more than 40?

3. Is every character shorter than 200?

4. Is every character male?
*/

// 1.

let getBlueEyesCh = persons.every((item)=>item.eye_color==='blue')
console.log(getBlueEyesCh);
// 2.

let getMassMoreCh = persons.every((item)=>item.mass>40)
console.log(getMassMoreCh);

// 3.
let getShorterCh  = persons.every((item)=>item.height<200)
console.log(getShorterCh);
// 4.

let getGenderCh = persons.every((item)=>item.gender==='male')
console.log(getGenderCh);


/* ***SOME***

1. Is there at least one male character?

2. Is there at least one character with blue eyes?

3. Is there at least one character taller than 210?

4. Is there at least one character that has a mass of less than 50? */


// 1

let getSomeMale = persons.some((item)=>item.gender==='male')
console.log(getSomeMale);

// 2

let getSomeBlueEyes = persons.some((item)=>item.eye_color==="blue")
console.log(getSomeBlueEyes);

// 3.

let getSomeTaller = persons.some((item)=>item.height>200)
console.log(getSomeTaller);

// 4.

let getSomeMass = persons.some((item)=>item.mass<50)
console.log(getSomeMass);


