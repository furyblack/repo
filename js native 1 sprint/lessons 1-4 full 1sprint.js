//push(), pop(), shift(), unshift() - мутирующими (изменяют исходный массив)

//push() - добавляет 1 или более элементов в конец массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.push('124', 'testName');

// console.log('names:', names); //names: [ 'Alex', 'Bob', 'Ivan', 'Sasha', '124', 'testName' ]
// console.log('result:', result); // result: 6

//pop() - удаляет последний элемент массива и возвращает его

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const poppedResult = names.pop();

// console.log('names: ', names); // names:  [ 'Alex', 'Bob', 'Ivan' ]
// console.log('poppedResult: ', poppedResult); // poppedResult:  Sasha

// const names = [];
// const result = names.pop();

// console.log('result', result);// result undefined

////////////////////////////////
// const array = [1, 2, 3, 4];
// let result = [];

// for (let i = array.length; i > 0; i--) {
//   const test = array.pop();
//   result.push(test);
// }

// console.log(result);
// console.log('array', array);
////////////////////////////////

//setTask([...task, task])//

// shift() - удаляет первый элемент и возвращает его знчение

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const shiftedNames = names.shift();

// console.log('names: ', names);// names:  [ 'Bob', 'Ivan', 'Sasha' ]
// console.log('shiftedNames', shiftedNames);// shiftedNames Alex

// const names = [];
// const res = names.shift();

// console.log('res:', res);// res: undefined

// unshift () - добавляет 1 или более элементов в начало массива и возвращает новую длинну массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const unshiftedResult = names.unshift('TestIten', 'TestItem2');

// console.log('names:', names);// names: [ 'TestIten', 'TestItem2', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('unshifted', unshiftedResult);// unshifted 6

//reverse() - меняет порядок элементов в массиве  на обратный (мутирующий)

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.reverse();

// console.log('names:', names); // [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
// console.log('result:', result);

//toRevesred() - не мутирующий

//split() - метод для работы ос строками

// Разобюем строку по разделителю "-"

// const str = 'ab-cd-ef';
// const res = str.split('-');

// console.log('str: ', str);// str:  ab-cd-ef
// console.log('res: ', res);// res:  [ 'ab', 'cd', 'ef' ]

// вторым параметром указываем сколько элементов  будет в массиве

// const str = 'ab-cd-ef';
// const res = str.split('-', 2);

// console.log('str: ', str); // str:  ab-cd-ef
// console.log('res: ', res); // res:  [ 'ab', 'cd']

//пустую строку

// const str = 'ab-cd-ef';
// const res = str.split('');

// console.log('str: ', str); // str:  ab-cd-ef
// console.log('res: ', res); // res:  [ 'a', b', '-', 'c','d','-', 'e', 'f']

// split()

// const str = 'ab-cd-ef';
// const res = str.split();

// console.log('str: ', str); // str:  ab-cd-ef
// console.log('res: ', res); // res:  [ 'ab-cd-ef' ]

//////
// const str = 'ab-cd'; //string
// const res = str
//   .split('') // array
//   .reverse()
// console.log(res);

// const str = 'ab-cd';
// const res = str.split('-');
// const test = res.join('');

// console.log(test);

// join() - метод массива

//объединить эдементы в строку по указанному разделителю
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join('-');

// console.log('names', names);// names [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('res', res);// res "Alex-Bob-Ivan-Sasha"

//join() - по умолчанию разделитель запятая

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join();

// console.log('names', names); // names [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('res', res); // res Alex,Bob,Ivan,Sasha

// слить все водну строку без разделителей

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join('');
// const resWithSpaces = names.join(' ');
// const test = names.join(' @ @ ');

// console.log('names', names); // names [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('res', res); // res "AlexBobIvanSasha"
// console.log('res with spaces: ', resWithSpaces); //res with spaces:  "Alex Bob Ivan Sasha"
// console.log(test); // "Alex @ @ Bob @ @ Ivan @ @ Sasha"

// concat() - метод массива(not mutable)

// const arr1 = [1, 2, 4];
// const arr2 = [5, 6, 7];
// const arr3 = [8, 9, 10];

// const res = arr1.concat(arr2, arr3, [11, 12, 13]);

// console.log(res); // [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const arr1 = [1, 2, 4];
// const arr2 = [5, 6, 7];

// const nestedArray = [
//   [8, 9, 10],
//   [11, 12, [13, 15, 17]],
// ];

// const res = arr1.concat(arr2, nestedArray);

// console.log('res', res); // [ 1, 2, 4, 5, 6, 7, [ 8, 9, 10 ], [ 11, 12 ] ]

// //flat() - если пустой то раскрывает 1 уровень вложенности

// const resEmptyFlat = res.flat();
// const resInfinity = res.flat(Infinity);

// console.log('resEmptyFlat: ', resEmptyFlat);
// console.log('resInfinity: ', resInfinity);

//forEach() -

//Array.forEach(function(el, index, array) {
/// который мы хотим выполнить
//})

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function (elem) {
//   sum += elem; //sum = sum + elem
// });

// console.log('sum:', sum); //15

//find() - метод массива возвращает первый элемент согласно переданному условию, если эл-та нет - undefined

// const words = ['abs', 'testvariable', 'peopl', 'apple', 'test'];
// const res = words.find(function (el) {
//   return el.length === 5;
// });

// console.log(res);//peopl

// const words = ['abs', 'testvariable', 'test'];
// const res = words.find(function (el) {
//   return el.length === 5;
// });

// console.log(res); // undefined

// includes() - проверяет наличие элемента в массиве

// const arr = [1, 2, 3, 4, 5, 6];
// const res = arr.includes(3);
// const noValue = arr.includes(10);

// console.log('res: ', res); // true
// console.log('noValue:  ', noValue); // false

//filter() - метод массива, возвращает новый массив эдементов согласно переданному условию в коллбеке

// const words = ['abs', 'testvariable', 'test', 'purple', 'plants', 'beer', 'Poland'];

// const res = words.filter((el) => el.length >= 6);
// console.log('res: ', res);//  [ 'testvariable', 'purple', 'plants', 'Poland' ]

// sort() - метод для сортировки, сортирует на месте (мутабельный)

//1) сортирует на месте (мутабельно)  ASCII

// const names = ['Donald', 'alex', 'Alex'];
// console.log(names.sort()); // [ 'Alex', 'Donald', 'alex' ]

//2) мутабельно

// const names = ['Test', 'ana', 'Ana', 'Кирилл'];
// names.sort();

// console.log(names);// [ 'Ana', 'Test', 'ana', 'Кирилл' ]

// const numbers = [1, 90, 2, 4, -1000, 56, 87];

// const compareFunction = (a, b) => {
//   //по возрастанию

//   if (a > b) {
//     return 12; //переставляем наши элементы
//   } else {
//     return -12; ///не переставляем
//   }
// };

// console.log(numbers.sort(compareFunction)); // [-1000,  1,  2,  4, 56, 87,  90]

// const res = numbers.sort((a, b) => a - b);
// console.log('res', res);//по возрастанию [-1000,  1,  2,  4, 56, 87,  90]

// const res = numbers.sort((a, b) => b - a);
// console.log('res', res); //по убыванию [90, 87, 56, 4,  2,  1, -1000]

// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'alex',
//     isStudent: true,
//   },
// ];

// console.log(users.sort((a, b) => b.name.localeCompare(a.name)));

//toSorted()

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(values);
// console.log(sortedValues);

// map() -  return new array

// const users1 = [
//   {
//     id: 1,
//     name: 'Bob', //["Bob"]
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex', //["Bob", "Alex"]
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann', // //["Bob", "Alex", "Anna"]
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald', // // //["Bob", "Alex", "Anna", "Donald"]
//     isStudent: false,
//   },
// ];

// const users = users1.map((user) => user.name);
// console.log('users: ', users); // users:  [ 'Bob', 'Alex', 'Ann', 'Donald' ]

//полифилы метода массива map

// function newMap(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }

//   return result;
// }

// const reslutUsers = newMap(users1, (user) => user.name);
// console.log('resultUsers: ', reslutUsers); // resultUsers:  [ 'Bob', 'Alex', 'Ann', 'Donald' ]


//РЕШЕНИЕ ЗАДАЧ ДОМАШНИХ
// Добавьте один или несколько элементов в конец массива
//
// Исходный массив:

// let fruits = ['apple', 'banana', 'orange'];
// const new_frut = fruits.push('baba')
// console.log(fruits)
//


// Удалите последний элемент в массиве и верните этот элемент
//
// Исходный массив:
//
//
//
//     const users = [
//         {
//             id: 1,
//             name: 'Bob',
//             isStudent: true,
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             isStudent: true,
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             isStudent: true,
//         },
//         {
//             id: 4,
//             name: 'Donald',
//             isStudent: false,
//         },
//     ]
//
//
// const deleteduser = users.pop()
// console.log(deleteduser)
// console.log(users)




// shift():
//
//
// Удалите первого юзера и верните его
//
// Исходный массив:

//
//     const users = [
//         {
//             id: 1,
//             name: 'Bob',
//             isStudent: true,
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             isStudent: true,
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             isStudent: true,
//         },
//         {
//             id: 4,
//             name: 'Donald',
//             isStudent: false,
//         },
//     ];
// const deleted_user = users.shift()
// console.log(deleted_user)
// console.log(users)
//
// unshift():
//
//
// Добавьте один и более элементов в начало массива
//
// Исходный массив:
//
//
//     const users = [
//         {
//             id: 1,
//             name: 'Bob',
//             isStudent: true,
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             isStudent: true,
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             isStudent: true,
//         },
//         {
//             id: 4,
//             name: 'Donald',
//             isStudent: false,
//         },
//     ];
// users.unshift({id:0, name: "miha", isStudent: true})
// console.log(users)


// reverse(), join(), split():
//
// Сделать reverse слова
//
// Исходная строка:
//


//     const str = 'JavaScript is awesome';
// const res = str.split(' ').reverse().join(' ');
// console.log(res)


// concat():
//
// Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив, содержащий все элементы из обоих массивов.
//
//     Ожидаемый результат:

//
//     console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]
// function mergeArrays(arr1, arr2) {
//     let amergedArray = arr1.concat(arr2);
//     return amergedArray;
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))


// flat():
//
//
// Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины
//
// Ожидаемый результат:
//
//
//     console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// function flat (arr){
//     flat = arr.flat(Infinity)
//     return flat
// }
// console.log(flat([1, [2, 3], [[4], [5, 6]]]))



// find():
//
// Напишите функцию JavaScript, которая находит первый элемент в массиве, удовлетворяющий заданному условию.
//
//     Пример:
//
// Входной массив: [10, 20, 30, 40, 50]
// Условие: Найти первый элемент больше 25
// Выходные данные: 30
//
// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
//     Условие: Найти первый элемент, начинающийся на "o".
//     Выходные данные: "апельсин"
//
// Необходимо написать функцию findFirstElement, которая принимает на вход массив и функцию условия и возвращает первый элемент в массиве, удовлетворяющий условию.
//
//     Ожидаемый результат:
//
//
//     let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"


//9 find()

// function findFirstElement(arr, condition) {
//     return arr.find(condition);
// }
//
// let numbers = [10, 20, 30, 40, 50];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"


// includes():
//
// Напишите функцию JavaScript, которая проверяет, присутствует ли заданный элемент в массиве.
//
//     Пример:
//
// Входной массив: [1, 2, 3, 4, 5]
// Элемент для проверки: 3
// Выход: true
//
// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
//     Элемент для проверки: "виноград"
// Выход: false
//
// Необходимо написать функцию checkElement, которая принимает на вход массив и элемент и возвращает true, если элемент присутствует в массиве, и false в противном случае.
//
//     Ожидаемый результат:
//
//
//     let numbers = [1, 2, 3, 4, 5];
//  let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, 'grape')); // Output: false
// function checkElement(arr, element){
//     return arr.includes(element);
// }
// console.log(checkElement(fruits, 'apple'))



// filter():
// Напишите функцию JavaScript, которая фильтрует массив чисел и возвращает только те элементы, которые больше заданного значения.
//
//     Пример:
//
// Входной массив: [10, 20, 30, 40, 50]
// Значение для фильтрации: 25
// Выходной массив: [30, 40, 50]
//
// Входной массив: [5, 15, 25, 35, 45]
// Значение для фильтрации: 20
// Выходные данные: [25, 35, 45]
//
// Необходимо написать функцию filterGreaterThan, которая принимает на вход массив чисел и значение и возвращает новый массив, содержащий только элементы, превышающие указанное значение.
//
//
//     Ожидаемый результат:
//
//
//     let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];
//
// console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]
// function filterGreaterThan(arr, value){
//     return arr.filter((number)=>number>value)
// }

// let data = [
//     { value: 1, name: 'Option 1' },
//     { value: 2, name: 'Option 2' },
//     { value: 3, name: 'Option 3' },
// ];
// const indexed = data.map(name=>({
//     value: name.value,
//         label: name.name
//
// }))
// console.log(indexed)

//MAP

// let products = [
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
// ];
//
//
// // let productsWithDiscount = products.map(item=>({
// //     ...products,
// //     discountPrice: item.price*0.9
// // }))
//
// let productsWithDiscount = products.map((product)=>{
//     return{
//         ...product,
//         discountedPrice: product.price*0.9
//     }
// })
// console.log(productsWithDiscount)

//ДОП ЗАДАЧИ

// 1)	Напишите функцию, которая определяет, является ли переданная строка палиндромом. Палиндромом
// считается строка, которая читается одинаково как слева направо, так и справа налево(split, reverse, join)

// function isPalindrome(str){
//     let revstr =  str.split('').reverse().join('')
//     return revstr===str
// }
// // Ожидаемый результат:
// console.log(isPalindrome('level')); // Вернет true
// console.log(isPalindrome('racecar')); // Вернет true
// console.log(isPalindrome('hello')); // Вернет false



    //    ТРЕТИЙ УРОК
//slice - не мутабельлный

// let arr = ["a","b","c","d","e",]
// let subArr = arr.slice(0,3) //по третий элемент не включительно
// console.log(arr)
// console.log(subArr)

//splice - мутабельлный массив.splice(с какого инедкса удаляем, сколько шт удаляем, вставить, встаавить...)

// let arr = ["a","b","c","d","e",]
// let subArr = arr.splice(1,3) //по третий элемент не включительно
// console.log(arr)
// console.log(subArr)

// let arr = ["a","b","c","d","e",]
// let subArr = arr.splice(0,0,'sdf','sf') //по третий элемент не включительно
// console.log(arr)
// console.log(subArr)

//toSpliced() - не мутирующий а аргументы передаются так же как в сплайсе
// let arr = ["a","b","c","d","e",]
// let subArr = arr.toSpliced(1,0,'sdf','sf')
// console.log(arr)
// console.log(subArr)


//reduce()

// let a = [1,2,3,4,5]
// let res = a.reduce(function (acc,current){
//     return acc  + current
// }, 0)
// console.log(res)



//2 reduce

// fruts = [
//     { 'name':'orange', quoun:1},
//     {'name':'apple', quoun:2},
//     {'name':'liup', quoun:3}
// ]
// const totalfrut= fruts.reduce(function (acc,fruit){
//     return acc + fruit.quoun
// }, 0)
// console.log(totalfrut)

//3 reduce
// const numbers = [1,2,3,4,7,5,7,3,1]
// const maxNumber = numbers.reduce(function (acc,current ){
//     return current>acc ? current:acc
// },numbers[0])
// console.log(maxNumber)

//4 reduce

// const people = [
//     {name: 'alice', age: 13},
//     {name: 'bob', age: 12},
//     {name: 'mike', age: 11},
//
// ]
//
// const result = people.reduce(function (acc, user){
//     acc.names.push(user.name)
//     acc.totalAges +=user.age
//     return acc
// }, {names: [], totalAges:0})
// console.log(result)

//5 reduce

// const people =[
//     {name: 'afd', bud:545},
//     {name: 'sf', bud:34},
//     {name: 'ghg', bud:342},
// ]
//
// const total = people.reduce((acc,person)=> acc +person.bud,0)
// console.log(total)

//6 reduce
// const words = ['hello', ' ', 'world']
//
// const res = words.reduce((acc,el)=>{
//     return acc +el
// }, '')
// console.log(res)


// ЗАДАЧИ ПО 3 ЗАНЯТИЮ НА ЗАКРЕПЛЕНИЕ


// Задачи на закрепления slice:
//     let str = 'Hello, world!';
// let startIndex = 7;
// const sumstr = str.slice(7)
// console.log(sumstr)

//2
// 2) Напишите функцию, которая возвращает последние n элементов массива.
//
//     Expected:
//
// console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]

// function getn (arr, el){
//     return arr.slice(-el)
// }
// console.log(getn([1, 2, 3, 4, 5], 3))
//

// 3) Создайте функцию, которая извлекает часть пути URL-адреса, начиная с указанного индекса.
//
//     Expected:
//
// console.log(extractPath('https://example.com/blog/article', 18)); // Выведет: "/blog/article"

// function izvlek(arr, el){
//     return arr.slice(el+1)
// }
// console.log(izvlek('https://example.com/blog/article', 18))


// Задачи на splice:
//
//     1) Напишите функцию, которая принимает массив и индекс элемента для удаления, а затем удаляет этот элемент из массива, модифицируя его
//
// Expected:
//
//     let numbers = [1, 2, 3, 4, 5];
// console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]

// let numbers = [1, 2, 3, 4, 5];
// function removeElement(arr, index){
//      numbers.splice(index,1)
//     return arr
// }
// console.log(removeElement(numbers, 2));

// 2) Создайте функцию, которая принимает массив, индекс и новый элемент, а затем вставляет новый элемент в указанную позицию массива
//
// Expected:
//
//
//     let numbers = [1, 2, 4, 5];
// console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]

// let numbers = [1, 2, 4, 5]
// function insertElement(arr, index, newel){
//     numbers.splice(index, 0 ,newel)
//     return numbers
// }
// console.log(insertElement(numbers, 2, 3))

// Задачи на reduce:
//     1)	Напишите функцию, которая принимает массив чисел и использует метод reduce, чтобы вернуть сумму всех элементов в массиве
//
// Expected:
//     let numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Выведет: 15

//1я версия
// function sumArray(arr){
//    return  arr.reduce(function (acum, value){
//         return acum +value
//     },0)
// }

//2я версия
// function  sumArray (arr){
//     return arr.reduce((acum, value)=>acum+value)
// }



// 2)	Создайте функцию, которая принимает массив строк и возвращает сумму их длин, используя метод reduce
// Expected:
//   console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // Выведет: 17
// function sumStringLengths(arr){
//     return arr.reduce((acum, el)=>acum+el.length,0)
// }

// 3)	Напишите функцию, которая принимает массив, содержащий вложенные массивы чисел, и возвращает сумму всех чисел в этих массивах
// Expected:
//     console.log(
//         sumNestedArrays([
//             [1, 2],
//             [3, 4, 5],
//             [6, 7, 8, 9],
//         ])
//     ); // Выведет: 45
// function sumNestedArrays(arr) {
//     return arr.reduce((total, vlojenarr) => {
//         return total + vlojenarr.reduce((acc, num) => acc + num, 0);
//     }, 0);
// }


// 4)	Создайте функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы, используя метод reduce.
//     Expected:
// const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
// console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]
// function removeDuplicates(arr){
//     return arr.reduce((accum, current)=>{
//         if(!accum.includes(current)){
//             accum.push(current)
//         }
//         return accum
//     }, [ ])
// }

// 6)	Напишите функцию, которая принимает массив строк и возвращает объект, в котором ключи - это уникальные строки, а значения - количество их вхождений в массив
// // Expected:
//      const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// //
//  console.log(wordCount); // Output: { apple: 3, banana: 2, cherry: 1 }
//
// function wordCount(arr) {
//     return arr.reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) + 1;
//         return acc;
//     }, {});
// }
// console.log(wordCount(words)); // Output: { apple: 3, banana: 2, cherry: 1 }
//
//


// 7)	Создайте функцию, которая принимает массив объектов и возвращает массив значений определенного свойства объектов
//
// Expected:
//
//
//     const people = [
//         { name: 'Alice', age: 25 },
//         { name: 'Bob', age: 30 },
//         { name: 'Charlie', age: 22 },
//     ];
//
// const names = getPropertyValues(people, 'name');
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
//reduce - 7th

// function getPropertyValues(arr, property) {
//     return arr.reduce((result, obj) => {
//         result.push(obj[property]);
//         return result;
//     }, []);
// }
//
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 },
// ];
//
// const names = getPropertyValues(people, 'name');
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie']



//4 ЗАНЯТИЕ ПО НАТИВНОМУ JS

// const status_busy = 'busy'
// const status_ready = 'ready'
//
// const status_labels = {
// [status_busy]:'ожидает',
// [status_ready]:'готово'
// }
//
// const drivers = [
//     {name:'паша', status:'busy'},
//     {name:'аня', status:'ready'},
//     {name:'ваня', status:'busy'},
// ]
//
// const driversStatuses = drivers.map((driver)=>{
//     const {status} = driver
//     return status_labels[status]
// })
// console.log(driversStatuses)
//
// const name_property = 'last';
// const role_property = 'user';
//
// const employee = {
//     firstName: 'Ivan',
//     [name_property + 'Name']: 'Ivanov',
//     ['middle' + 'Name']: 'Ivanovich',
//     message: 'Hello world!',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         [role_property.toUpperCase()]: 'user',
//     },
// };
//
// console.log(employee);// firstName: 'Ivan',
// lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello world!',
//     permission: { canEdit: true, canDelete: false, USER: 'user' }

// 3)	Подсчет количества свойств объекта (Object.keys() + length)
//
// Исходный объект
//
// let student = {
//     name: 'John',
//     age: 20,
//     course: 'Math',
// };
// //
// // Ожидаемый результат
// //
//
// let propertyCount=  Object.keys(student).length
// console.log(propertyCount); // 3


// 4)	Подсчитайте сумме всех числовых знвчений объекта(Object.values() + reduce)
// Исходный объект
//
// let scores = {
//     math: 90,
//     english: 85,
//     science: 92,
// };
// //
// // Ожидаемый результат
// // console.log(totalScore); // 267
// let values  = Object.values(scores)
// const totalScore = values.reduce((acc, currentValue)=>acc+currentValue,0)
// console.log(totalScore)




// 5)	Напишите функцию objectToArray(obj), которая принимает объект и возвращает массив массивов, где каждый подмассив содержит пару ключ-значение. (Object.entries())
// Ожидаемый результат:
//     let obj = { a: 1, b: 2, c: 3 };
// console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]
//
// function objectToArray (obj){
//     return Object.entries(obj)
// }

// 6)	Создайте Map, где ключами будут имена студентов, а значениями — их оценки. Добавьте несколько студентов и их оценки,
// затем выведите на консоль оценку конкретного студента(new Map + set + get)
//
// Example:

//     console.log(studentGrades.get('Bob')); // 85
// // Создаем новый Map
// let studentScores = new Map();
//
// // Добавляем студентов и их оценки
// studentScores.set('Alice', 90);
// studentScores.set('Bob', 85);
// studentScores.set('Charlie', 92);
// studentScores.set('David', 88);
//
// // Получаем и выводим оценку конкретного студента
// let studentName = 'Charlie';
// let score = studentScores.get(studentName);
//
// console.log(`${studentName}'s score is ${score}`); // Вывод: Charlie's score is 92
//
// // Можем также вывести оценки всех студентов
// studentScores.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });

// 7)	Создайте Map с данными о продуктах (ключ — название продукта, значение — цена).
// Проверьте наличие определенного продукта и удалите его, если он существует.(new Map, has, delete)
// Исходная коллекция продуктов
// let products = new Map([
//     ['Milk', 1.2],
//     ['Bread', 1.5],
//     ['Cheese', 2.5],
// ]);

// Ожидаемый результат

// console.log(products.has('Bread')); // false
// console.log(products); // Map(2) { 'Milk' => 1.2, 'Cheese' => 2.5 }

// let products = new Map([
//     ['Milk', 1.2],
//     ['Bread', 1.5],
//     ['Cheese', 2.5],
// ]);
//
// if (products.has('Bread')) {
//     products.delete('Bread');
// }
// if (products.has('Milk')){
//     products.delete('Milk')
// }
//
// console.log(products.has('Bread')); // false
// console.log(products); // Map(2) { 'Milk' => 1.2, 'Cheese' => 2.5 }

// 8)	Создайте Set с несколькими элементами. Проверьте наличие определенного элемента и удалите его, если он существует.(new Set, has, delete)
// Исходное множество

//

// Ожидаемый результат

// let fruits = new Set(['apple', 'banana', 'mango']);
//
// if (fruits.has('banana')) {
//     fruits.delete('banana');
// }
//
// console.log(fruits.has('banana')); // false
// console.log(fruits); // Set(2) { 'apple', 'mango' }




// 9)	Избавьтесь от дубликатов в массиве (new Set)
//
// Исходный массив

//
// const numbers = [1, 1, 4, 6, 7, 8, 9, 0, 0, 10, 10, 11]


// Ожидаемый результат


// console.log('result: ', result); //result:  [
// //   1, 4,  6,  7, 8,
// //   9, 0, 10, 11
// // ]



//
// const numbers = [1, 1, 4, 6, 7, 8, 9, 0, 0, 10, 10, 11];
//
// const result = [...new Set(numbers)];
//
// console.log('result: ', result); //result:  [
// //   1, 4,  6,  7, 8,
// //   9, 0, 10, 11
// // ]
