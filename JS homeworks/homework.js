// Homework Nr 16  exercise (1)
const fruits = ['grapes', 'pears', 'plums', 'cherries'];
fruits.push('oranges','apples','bananas');
console.log(fruits);
console.log(fruits.length);

// Homework Nr 16 exercise (2)
const numbers = [1,2,3,4,5];
console.log(numbers);
const removedNumber = numbers.pop();
console.log(removedNumber);
console.log(numbers);
const removedNumber1 = numbers.shift();
console.log(removedNumber1);
console.log(numbers);

// Homework Nr 16 exercise (3)
const colors = ['red','green','blue','yellow'];
console.log(colors);
const colorIndex = colors.indexOf('green');
console.log(colorIndex);
const haveColor = colors.includes('orange');
console.log(haveColor);

// Homework Nr 16 exercise (4)
const names = ['John','Jane','Mike','Jennifer'];
console.log(names);
names.unshift('David');
console.log(names);
const namesIndex = names.indexOf('Mike');
console.log(namesIndex);

// Homework Nr 16 exercise (5)
 const numberss = [2,4,6,8,10];
 console.log(numberss);
 const haveNumber = numberss.includes(5);
 console.log(haveNumber);
 numberss.push(12);
 console.log(numberss);

 // Homework Nr 16 exercise (6)
 const months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October','November','December'];
 months.sort();
 console.log(months);

 // Homework Nr 16 exercise (7)
 const yearMonths = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October','November','December'];
 const result = yearMonths.filter((word)=>word.length > 3);
 console.log(result);

 // Homework Nr 16 exercise (8)
 const yearArray = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October','November','December'];
 const sliceYear = yearArray.slice(6,-1);
 console.log(sliceYear);

 // Homework Nr 16 exercise (9)
 const monthsArray = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October','November','December'];
 const resultArray = monthsArray.filter((word)=>word.length > 5);
 resultArray.sort();
 const resultString = resultArray.join('"_"');
 console.log(resultString);



 
