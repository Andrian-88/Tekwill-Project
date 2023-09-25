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


