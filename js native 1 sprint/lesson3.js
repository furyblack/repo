// slice splice toSpliced() reduce

//slice() -иммутабелен

//1) expected ['a', 'b']

// let arr  = ['a', 'b', 'c','d', 'e']
// const  sub = arr.slice(0,2) // по второй индекс не включительно  (второй параметр не обязателен)
//
// console.log('arr', arr)
// console.log('arr', sub)

//2) splice мутабельный метод (откуда удаляем , сколько удаляем, [вставить],[вставить])


// let arr  = ['a', 'b', 'c','d', 'e']
// const result  = arr.splice(1, 0, '2', 'test')
// console.log(arr)

//toSpliced() -иммутабельный такой же как splice только не мутирует исходный объект

//reduce()

//вариант без редьюс
// let a = [1,2,3,4,5]
// let sum  = 0
// for(let i =0; i<a.length; i++){
//     sum = sum+a[i]
//
// }
// console.log(sum)//  результат  15

//вариант с редьюс
//reduce((acc, el)=> {}, a[0])пример


// let a = [1,2,3,4,5]
// const result = a.reduce((acc,el) =>{
//     console.log("acc", acc)
//     console.log("el", el)
//     return acc +el
// }, 0)

//второй пример
// const fruits = [
//     {name: 'apple', qunt: 2},
//     {name: 'apple', qunt: 3},
//     {name: 'apple', qunt: 5}
//
// ]
//
// const result  = fruits.reduce((acc, fruit) => {
//     console.log('fruit', fruit )
//     return acc+ fruit.qunt
// },0)
//
// console.log('result', result)


//самостоятельный пример
// const poep = [
//     {name: 'vika', age: 23, budg: 1233},
//     {name: 'vika2', age: 33, budg: 1237},
//     {name: 'vika3', age: 2463, budg: 1523},
//     {name: 'vika4', age: 263, budg: 1323}
// ]
// const res = poep.reduce((acc,el) =>{
//     acc.totalNames.push(el.name)
//     return acc
// }, {totalNames: []})
//
// console.log(res) //{ totalNames: [ 'vika', 'vika2', 'vika3', 'vika4' ] }

// const  words = ['hello' , ' ', 'word', '!']
// const res = words.reduce((acc, el) =>{
//     return acc + el
// }, '')
// console.log(res)

const people = [
    {name: "miha", age: 21, budget:3234},
    {name: "sa", age: 21, budget:325434},
    {name: "gfd", age: 25, budget:456},
    {name: "ver", age: 61, budget:3456234},
]

const mappedInfo = people.map((person) => ({
    name: person.name,
    age: person.age
}))

const result = {
    totalNames: mappedInfo.map((person)=>person.name),
    tatalAges: mappedInfo.reduce((acc, el)=>acc +el.age, 0)
}
console.log(result)