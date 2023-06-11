// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function findBiggestWord(str) {
  return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};

console.log(findBiggestWord('It is one of the most dangerous places in the world'));

 


// 2. написать функцию которая принимает число и возвращает перевернутое число
  
  function reverseNumber(number) {
    number = number + "";
    return number.split("").reverse().join("");
  }

  console.log(reverseNumber(3452718));

  // v2
  const reverseNumber1 = (n) => n.toString().split('').reverse().join('');

  console.log(reverseNumber1(91847665)); 



// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

const names = ['John', 'Karen', 'Kevin', 'Sandra','Karen', 'Kevin', 'Megan'];

const unique = (names) => {
  return names.filter((el, ind) => ind === names.indexOf(el));
};

console.log(unique(names));

// function unique(str) 

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

// function calcPoints(win, draw, loss)

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

const numbers = [123, 88, 76,5, 10, 1];

const maxValue = numbers.reduce((max, current) => {
  return Math.max(max, current);
});

const minValue = numbers.reduce((min, current) => {
  return Math.min(min, current);
});

const countNumbers = Object.keys(numbers).length;

// function statisctics(arr);


// 6.Написать функцию которая принимает массив работников компании 

// const workers = [
//   { name: "Jimm", salary: 40000, department: "IT" },
//   { name: "Bob", salary: 60300, department: "HR" },
//   { name: "Stacy", salary: 15000, department: "IT" },
//   { name: "Tom", salary: 55200, department: "DEVOPS" },
//   { name: "Kate", salary: 25000, department: "IT" },
//   { name: "John", salary: 40000, department: "HR" },
//   { name: "Billy", salary: 60000, department: "DEVOPS" },
// ];

// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 



