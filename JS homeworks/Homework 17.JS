//Homework Nr 17 ,exercise  (1)
const fruitss = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruitss.length; i++) {
  console.log(fruitss[i]);
}

//Homework Nr 17,exercise (2)
const numbersArray = [1,2,3,4,5];
let sum = 0;
for (let i = 0;i < numbersArray.length; i++){
    sum += numbersArray[i];

}
console.log('The sum of all elements is:' +sum);

// Homework Nr 17,exercise (3)
let namesArray = ['John', 'Jane', 'Mikhael', 'Jennifer', 'Bobby'];

let nameLengths = [];
 
for (let i = 0; i < namesArray.length; i++) {
  nameLengths.push(namesArray[i].length);
}

console.log("Name lengths: " + nameLengths);   

// Homework Nr 17 exercise (4)

let  companyDepartments = [ 
['HR','Robert','Martin','Will','Michael','Stiven'],
['IT','Megan','Morgan','Jonny','Clint'],
['Sales','Joane','Eva','Denzel','Jaison','Kimberlie'],
['Marketing','Kathy','Liam','Mia','Noah'],
];
console.log(companyDepartments);
for (let i = 0; i < companyDepartments.length;i++) {
  for (let j = 1; j < companyDepartments[i].length;j++) {
    console.log(companyDepartments[i] [j]);
  }
}
  
let allEmployeeNames = [];
for (let i = 0; i < companyDepartments.length;i++) {
  for (let j = 1; j < companyDepartments[i].length;j++) {
    allEmployeeNames.push(companyDepartments[i] [j]);
  }
}
allEmployeeNames.sort();
console.log('allEmployeeNames',allEmployeeNames);

// Homework Nr 17 exercise (5)
const person = { 
 name: 'John',
 lastName: 'Doe',
 age: 30,
 profession: 'developer'
 };
 function countProperties(person) {const properties = Object.keys(person);
  return properties.length;
}
const numberOfProperties = countProperties(person);
console.log(numberOfProperties);

// Hoework Nr 17 exercise (6)

let n = 5;
const numbergeneratedArray = [];
  for (let i = 1; i <= n; i++) {
   numbergeneratedArray.push(i);
   
  }
  console.log(numbergeneratedArray);

  // Homework 17 exercise (7)

  var list = [45, 3, 651, -80, 89.7, 1545, 2090, 175000]; 
  function maxElement (list){
    return list.sort((a,b) => b-a)[0];  
  };
  console.log(maxElement(list));
  
  //Homework 17 exercise (8)
  
  const academicPerformance = (math,literature,history) => {return (math + literature + history)/3};
  console.log(academicPerformance(8, 7, 9));

  // Homework 17 exercise (9)

  let Dog = new Object();
Dog.name = 'Lassy';
Dog.age = 3;
Dog.color = 'brown';
Dog.puppiesNames = [];

function myDogPuppies(Dog, numberOfPuppies) {
    for (let i = 1; i <= numberOfPuppies; i++) {
        Dog.puppiesNames.push(`Puppy_${i}`);
    }
}

myDogPuppies(Dog, 5);
console.log(Dog);