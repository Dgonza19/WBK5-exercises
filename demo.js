let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

let firstNumberOver60;

// for( let i = 0; i < numbers.length ; i++){
//   if(numbers[i] > 60){
//     firstNumberOver60 = numbers[i];
//     break;
//   }
// }

// for( let number of numbers){
//   if(number > 60){
//     firstNumberOver60 = number;
//     break;
//   }
// }

for (let number of numbers){
  if(isOver60(number)){
    firstNumberOver60 = number;
    break;
  }
}

console.log('The first number over 60 is ');

function isOver60(someValue) {
  return (someValue > 60);
}

let firstNumberOver60UsingFind = number.find(isOver60);

console.log('The first number over 60 is' `${firstNumberOver60UsingFind}`)