// Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă este par. Afișați rezultatul în consolă.

const first = (number) => {
  if (number % 2) return number * 2;
  else return number - 2;
};

console.log(first(3));

console.log(first(2));

// Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. Parcurgeți array-ul folosind un “for loop”. Afișați rezultatul în consola.

// Ex:

// const arr = [1,2,3,4,5,6,7,8,9];

// savePrimes(arr) => [1,2,3,5,7];

const second = (array) => {
  let arrayOfPrimeNumbers = [];

  for (let i = 0; i < array.length; i++) {
    let prime = true;

    for (let j = 2, s = Math.sqrt(array[i]); j <= s; j++)
      if (array[i] % j === 0) prime = false;

    if (prime) arrayOfPrimeNumbers.push(array[i]);
  }

  return arrayOfPrimeNumbers;
};

console.log(second([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola.

// Ex:

// saveStrings([1, "1", "salut", 2, 6, true, "true"]) -> ["1", "salut", "true"]

// saveStrings([1,2,3,4]) -> []

// saveStrings(["1","2","3","4"]) -> ["1","2","3","4"]

const third = (array) => {
  let onlyStrings = [];
  array.forEach((element) => {
    if (typeof element === 'string') {
      onlyStrings.push(element);
    }
  });
  return onlyStrings;
};

console.log(third([1, '1', 'salut', 2, 6, true, 'true']));

console.log(third([1, 2, 3, 4]));

console.log(third(['1', '2', '3', '4']));

// Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”.

// Ex:

// 	addDigits(“1523”) => 9

// 	Hint: pentru a transforma un caracter/string în număr folosiți operatorul cast.

// JavaScript Type Conversions (w3schools.com)

function forth(number) {
  let array = number.split('');
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 === 0) continue;
    sum += Number(array[i]);
  }

  return sum;
}

console.log(forth('1523'));

// Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, după exemplul prezentat la curs.

const fifth = (priority) => {
  switch (priority) {
    case 'firstWeek':
    case 'sixthWeek':
      console.log('Coding');
      break;
    case 'secondWeek':
      console.log('Workout');
      break;
    case 'thirdWeek':
      console.log('Math');
      break;
    case 'forthWeek':
    case 'fifthWeek':
      console.log('History');
    default:
      console.log('Netflix');
  }
};

fifth('secondWeek');
