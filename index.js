// //является ли число четным
const isEven = function (num1) {
  if (isNaN(num1)) {
    return 'ERROR. Please enter number';
  }

  if (num1 % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

const enterNumber = prompt('Please, enter number');
const result = isEven(enterNumber);
console.log(result);



// возвращать наименьшее из двух чисел
const returnTheLeastNumber = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'ERROR. Please enter number';
  }

  if (num1 > num2) {
    return num2;
  }
  else {
    return num1;
  }
}

const enterFirstNumber = prompt('Enter first number');
const enterSecondNumber = prompt('Enter Second number');
const result = returnTheLeastNumber(enterFirstNumber, enterSecondNumber);
console.log(result);


// функцию которая принимает количестов денег у пользователя и стоимость товара
const moneyCalc = function (userMoney, costOfGoods) {

  if (isNaN(userMoney) || isNaN(costOfGoods)) {
    return 'ERROR. Please enter number';
  }

  if (userMoney >= costOfGoods) {
    return true;
  }
  else {
    return false;
  }
}

const enterUserMoney = prompt('Enter money, you have');
const enterCostOfGoods = prompt('Enter cost of goods');
const result = moneyCalc(enterUserMoney, enterCostOfGoods);
console.log(result);


// // Создать функцию которая возвращает абсолютную величину числа
const absoluteNumValue = function (num) {
  if (isNaN(num)) {
    return 'ERROR. Please enter number';
  }
  if (num < 0) {
    return -num;
  }
  else {
    return num
  }
}

const enterNum = prompt('Enter number');
result = absoluteNumValue(enterNum);
console.log(result);