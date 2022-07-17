//1-------------------------------------------------------
const showDoubleNumber = (number) => {
  return number * 2;
};

const number = showDoubleNumber(6);

console.log(number);
//2-------------------------------------------------------
const showAge = (age) => {
  return age + 23;
};

const age = showAge(5);

console.log(age);
//3-------------------------------------------------------
const showTaxes = (price) => {
  return price * 1.21;
};

const taxes = showTaxes(18);

console.log(taxes);
//4-------------------------------------------------------
const makeDiscount = (price) => {
  const discount = (9 * price) / 100;
  console.log("el descuento es de: " + discount);

  return price - discount;
};

const total = makeDiscount(120);

console.log("el precio total es de: " + total);
//5-------------------------------------------------------
const divideFruits = (fruits) => {
  return fruits / 3;
};
const fruits = divideFruits(10);

console.log("cada mocoso comera: " + fruits);
//6-------------------------------------------------------
const isAPositiveNumber = (number) => {
  if (number > 0) {
    return "es positivo";
  }
  return "es negativo";
};

const result = isAPositiveNumber(-5);

console.log(result);
//7-------------------------------------------------------
const isEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "es par";
  }
  return "es impar";
};

const resultEvenOrOdd = isEvenOrOdd(79);

console.log(resultEvenOrOdd);
//8-------------------------------------------------------
const isMultipleTwo = (number) => {
  if (number % 2 === 0) {
    return "es multiplo de 2";
  }
  return "no es multiplo de 2";
};

const resultMultipleTwo = isMultipleTwo(95);

console.log(resultMultipleTwo);
//9-------------------------------------------------------
const isMultipleFive = (number) => {
  if (number % 5 === 0) {
    return "es multiplo de 5";
  }
  return "no es multiplo de 5";
};
const resultMultipleFive = isMultipleFive(95);

console.log(resultMultipleFive);
//10-------------------------------------------------------
const isDivisibleForThree = (num1, num2) => {
  if (num1 % 3 === 0 && num2 % 3 === 0) {
    return "los dos  numeros son divisibles por 3";
  } else if (num1 % 3 === 0) {
    return "el primer numero es divisible por 3";
  } else if (num2 % 3 === 0) {
    return "el segundo numero es divisible por 3";
  }
  return "ninguno es divisible por 3";
};

const resultDivisibleForThree = isDivisibleForThree(2, 3);

console.log(resultDivisibleForThree);
//11-----------------------------------------------------------------
const showText = (letra) => {
  console.log(letra);
};
showText("k");
//12-------------------------------------------------------
const orderLetters = (letter1, letter2) => {
  const lettersToList = [letter1, letter2];
  return lettersToList.sort();
};

const lettersOrderer = orderLetters("p", "h");

console.log(lettersOrderer);
//13-------------------------------------------------------
const transformDecimal = (num) => {
  return num + 15 / 2;
};
const decimalTransformed = transformDecimal(16.3);

console.log("decimal traba: " + decimalTransformed);
//14-------------------------------------------------------
const showTotalShoes = (shoesFirstPart, shoesSecondPart) => {
  return shoesFirstPart + shoesSecondPart;
};
const totalShoes = showTotalShoes(10, 5);
//15---------------------------------------------------------------------
const isEven = (number) => {
  if (number % 2 === 0) {
    return "es par";
  }
  return "no es par";
};

const resultIsEven = isEven(93);

console.log(resultIsEven);
//16-----------------------------------------------------------------------
const calculateIncrement = (price) => {
  return price * 1.1;
};

const priceIncremented = calculateIncrement(46.2);

console.log(priceIncremented);
//17----------------------------------------------------------------
const showMayorPrice = (price1, price2) => {
  const numbersToList = [price1, price2];
  return numbersToList.sort();
};

const pricesOrdered = showMayorPrice(65, 22);

console.log(pricesOrdered);
//18-------------------------------------------------------

const showCarMostFaster = (car1, car2) => {
  if (car1 < car2) {
    return "el auto numero 1 llego de primero con un tiempo de: " + car1;
  }
  return "el auto numero 2 llego de primero con un tiempo de: " + car2;
};

const carMostFaster = showCarMostFaster(1.23, 0.95);

console.log(carMostFaster);
//19-------------------------------------------------------
const isOrderedThreeNumbers = (num1, num2, num3) => {
  if (num1 < num2 < num3) {
    return "Estan ordenados de menor a mayor";
  }
  return "No estan ordenados de menor a mayor";
};

const resultIsOrderNumbers = isOrderedThreeNumbers(6, 2, 123);

console.log(resultIsOrderNumbers);
//20-------------------------------------------------------
const calculateProductOrSum = (num1, num2, num3) => {
  const sum = num1 + num2 + num3;
  if (num1 < 0) {
    const product = num1 * num2 * num3;
    return "el producto de los 3 numeros es " + product;
  }

  return "la suma de los 3 numeros es: " + sum;
};
const resultOfCalculate = calculateProductOrSum(-96, 5, 450);

console.log(resultOfCalculate);
//21------------------------------------------------------- ---------
const calculateTriangulateArea = (base, altura) => {
  return (base * altura) / 2;
};
const TriangulateArea = calculateTriangulateArea(26, 45);

console.log("la superficie del triangulo es: " + TriangulateArea);
//22-------------------------------------------------------
const showMayorNumber = (num1, num2) => {
  if (num1 < num2) {
    return `el numero ${num1} es menor al numero ${num2}`;
  }
  return `el numero ${num2} es menor al numero ${num1}`;
};

const resultMayorNumber = showMayorNumber(4, 9);

console.log(resultMayorNumber);
//23-------------------------------------------------------
const calculateCircleArea = (radio) => {
  return 3.141592 * radio ** 2;
};

const resultCircleArea = calculateCircleArea(5);

console.log(resultCircleArea);
//24------------------------------------------------------------------
const calculateHypotenuse = (hick1, hick2) => {
  return hick1 ** 2 + hick2 ** 2;
};

const resultHypotenuse = calculateHypotenuse(3, 4);

console.log(resultHypotenuse);
//25-------------------------------------------------------
const showTable = (numero) => {
  for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
  }
};
showTable(9);
//26--------------------------------------------------------------------
const showEvenOneHundredNumbers = (num) => {
  for (let i = 1; i <= num; i++) {
    //console.log(i);
    if (i % 2 == 0) {
      console.log(i);
    } else {
      console.log("impar");
    }
  }
};
showEvenOneHundredNumbers(100);
//27--------------------------------------------------------------------
const showEvenFiftyNumber = (num) => {
  let oddCount = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0) {
      oddCount = oddCount + 1;
    }
  }
  return "el total de numeros impares es: " + oddCount;
};

const resultOddCount = showEvenFiftyNumber(50);

console.log(resultOddCount);
//28-------------------------------------------------------
const showTwentyEvenOrOdd = (num) => {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      oddCount++;
    } else {
      evenCount++;
    }
  }

  return `hay ${oddCount} numeros pares y hay ${evenCount} numeros impares`;
};

const resultTwentyEvenOrOdd = showTwentyEvenOrOdd(20);

console.log(resultTwentyEvenOrOdd);
//29-------------------------------------------------------------------
const showMayorNumberAndHisPosition = (numberList) => {
  const values = {
    mayorNumber: 0,
    position: 0,
  };

  numberList.forEach((number, index) => {
    if (values.mayorNumber < number) {
      values.mayorNumber = number;
      values.position = index;
    }
  });

  return `el numero mayor es ${values.mayorNumber} y esta en la posicion ${values.position}`;
};

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultMayorNumberAndHisPosition =
  showMayorNumberAndHisPosition(numberList);

console.log(resultMayorNumberAndHisPosition);
//31-------------------------------------------------------------------------------

letterList = ["a", "b", "c", "d", "e", "f", "G", "h", "i"];

const searchMayorLetter = (letterList) => {
  const letterListOrdered = letterList.sort();
  const mayorLetter = letterListOrdered[letterListOrdered.length - 1];

  return mayorLetter;
};

const resultMayorLetter = searchMayorLetter(letterList);

console.log("La letra mayor es: " + resultMayorLetter);

//32------------------------------------------------------------------------------
const studentList = [
  { gender: "hombre", note: 55 },
  { gender: "mujer", note: 41 },
  { gender: "hombre", note: 94 },
  { gender: "mujer", note: 36 },
  { gender: "hombre", note: 29 },
  { gender: "mujer", note: 71 },
  { gender: "hombre", note: 96 },
  { gender: "mujer", note: 81 },
  { gender: "hombre", note: 12 },
  { gender: "mujer", note: 61 },
  { gender: "hombre", note: 75 },
  { gender: "mujer", note: 45 },
  { gender: "hombre", note: 86 },
  { gender: "mujer", note: 94 },
  { gender: "hombre", note: 32 },
  { gender: "mujer", note: 16 },
  { gender: "hombre", note: 55 },
  { gender: "mujer", note: 46 },
  { gender: "hombre", note: 95 },
  { gender: "mujer", note: 87 },
];

const searchMayorNote = (studentList) => {
  const notesList = studentList.map((student) => student.note);
  const mayorNote = Math.max(...notesList);
  const studentWithMajorNote = studentList.find(
    (student) => student.note === mayorNote
  );

  return `El alumno con mayor nota tiene ${studentWithMajorNote.note} y su genero es ${studentWithMajorNote.gender} `;
};

const studentWithMajorNote = searchMayorNote(studentList);

console.log(studentWithMajorNote);
