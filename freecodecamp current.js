// const myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
//
// const gloveBoxContents = myStorage.car.inside["glove box"]
// console.log(gloveBoxContents)



//
// Вы создаете функцию, которая помогает поддерживать коллекцию музыкальных альбомов. Коллекция организована как объект,
// содержащий несколько альбомов, которые также являются объектами. Каждый альбом представлен в коллекции с уникальным idименем свойства.
// Внутри каждого объекта альбома существуют различные свойства, описывающие информацию об альбоме. Не во всех альбомах есть полная информация.
//
//     Функция updateRecordsпринимает 4 аргумента, представленных следующими параметрами функции:
//
//     records- объект, содержащий несколько отдельных альбомов
// id- число, обозначающее конкретный альбом в recordsобъекте
// prop- строка, представляющая имя свойства альбома для обновления
// value— строка, содержащая информацию, используемую для обновления свойства альбома.
//     Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный в функцию.
//
//     Ваша функция всегда должна возвращать весь recordsобъект.
//     Если valueэто пустая строка, удалите данное propсвойство из альбома.
//     Если propэто не так tracksи valueне является пустой строкой, присвойте valueэтому альбому prop.
//     Если propэто tracksи valueне пустая строка, но у альбома нет tracksсвойства, создайте пустой массив и добавьте valueк нему.
//     Если prop является пустой строкой tracksи не является ею, добавьте ее в конец существующего массива альбома .valuevaluetracks
// Примечание.recordCollection Для тестов используется копия объекта . Не следует напрямую изменять recordCollectionобъект.

// // Setup
// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };
//
// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//     return records;
// }
//
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');






// // Setup
// // Setup
// const myArray = [];
//
// // Only change code below this line
// let i = 5;
// while (i >= 0) {
//     myArray.push(i);
//     i--;
// }
// console.log(myArray)