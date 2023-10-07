let countryName = 'Germany';
let continentName = 'Europe';
let populationNumber = 84;
let island = false;
let countryDescription = `${countryName} is located in ${continentName},${populationNumber} people live here`;
console.log('countryName:',countryName);
console.log('continentName:',continentName);
console.log('populationNumber:',populationNumber);
console.log(island);
console.log('countryDescription:',countryDescription);
//Homework num.14
const weightSarah = 65;
const heightSarah = 1.75;
const sarahBMI = weightSarah / (heightSarah ** 2);
const weightBob = 93;
const heightBob = 1.89;
const bobBMI =weightBob / (heightBob ** 2);

console.log('weightSarah: ',weightSarah);
console.log('heightSarah: ',heightSarah);
console.log('weightBob: ',weightBob);
console.log('heightBob: ',heightBob);
console.log('sarahBMI: ',sarahBMI);
console.log('bobBMI: ',bobBMI);

if (sarahBMI < 18.5) {console.log ('У Сары недостаточный вес')}
if (sarahBMI>18.5 && sarahBMI < 25) {console.log ('У Сары нормальный вес')}
if (bobBMI <18.5 || bobBMI>25) {console.log ('У Боба недостаточный или избыточный вес')}
else {console.log('У Боба нормальный вес')}


// Homework num.15

//exercise Nr. 1
const number = 20;
if (number % 2 === 0){console.log('Yes this number is even')} ; 
if (number % 2 !== 0){console.log('This is an odd number')};


//exercise Nr. 2
let  isLoggedIn = true ;
if (!isLoggedIn) {console.log('Go log in')}
else {console.log('Welcome')};
isLoggedIn =  '' ? 'Hello' : 'You need to log in';
console.log(isLoggedIn);

//exercise Nr 3
const smartphonePrice = 8700;
let smartphoneQuantity = 15780;
let smartphoneAvailability = smartphoneQuantity >0;
let smartphoneTotalPriece = smartphonePrice * smartphoneQuantity;
console.log('smartphonePriece: ',smartphonePrice);
console.log('smartphoneQuantity: ',smartphoneQuantity);
console.log('smartphoneTotalPriece: ',smartphoneTotalPriece);
console.log('smartphoneAvailability: ',smartphoneAvailability);
smartphoneAvailability = smartphoneQuantity>0 ? 'present in stock' : 'stock is empty';
console.log (smartphoneAvailability)

//exercise Nr 4
let year = 2020;
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('This is a leap year');
} else {
    console.log('No,this is not a leap year');
}


// exercise Nr 5 (switch)
const countryCode = 'HU';
switch (countryCode) {
    case 'MD':
        console.log('Moldova');
        break;
        case 'D':
            console.log('Deutchland')
            break;
            case 'RO':
                console.log('Romania')
                break;
                case 'POL':
                    console.log('Poland')
                    break;
                    case 'HU':
                    console.log('Hungary')
                    break;
};

// exercise Nr6 (switch)
 

const assignedGrade = (score) => {
    let grade;
    switch (true) {
        case score >= 97 && score <= 100:
            grade = 'A+';
            break;
        case score >= 93:
            grade = 'A';
            break;
        case score >= 90:
            grade = 'A-';
            break;
        case score >= 87:
            grade = 'B+';
            break;
        case score >= 83:
            grade = 'B';
            break;
        case score >= 80:
            grade = 'B-';
            break;
        case score >= 77:
            grade = 'C+';
            break;
        case score >= 73:
            grade = 'C';
            break;
        case score >= 70:
            grade = 'C-';
            break;
        case score >= 67:
            grade = 'D+';
            break;
        case score >= 63:
            grade = 'D';
            break;
        case score >= 60:
            grade = 'D-'
            break;
        case score >= 1 && score <= 59:
            grade = 'F';
            break;

        default:
            grade = 'O';
            console.log('Outstanding')
            break;
    }
    return grade;
} 
console.log(assignedGrade(90));
  
// homework 15 exercise Nr 7

function tellFortune (N,Z,Y,X) {
     console.log(`You will be ${X} in ${Y}, and will get married to ${Z} with ${N} kids`)
}
tellFortune(1, "Sophia", "London", "a renowned programmer");
    tellFortune(2, "Emma", "Paris", "a successful entrepreneur");
    tellFortune(3, "Corina", "Rome", "a successful pharmacist");


// homework 15 exercise Nr 8
    function calculatedDogAge(N){ 
        let dogYears = N * 7; 
        console.log(`Your dog is ${dogYears} years old in dog years`)
    }

   calculatedDogAge(5);
   calculatedDogAge(8);
   calculatedDogAge(10);