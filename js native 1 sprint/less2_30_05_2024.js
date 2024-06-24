// const str = 'abcdefg'
// //переворачиваем строку
// const splitedStr = str.split("")
// console.log(splitedStr)
// const reversedstr = splitedStr.reverse().join('')
// console.log(reversedstr)


//сонтакт метод склеивания массивов не мутирующий

// const arr1 = [1,2]
// const arr2 = [3,4]
// const arr3 = [5,6,[6,4, [1,5]]]
// const result = arr1.concat(arr2,arr3)
// console.log(result)
// const res1  = result.flat(Infinity)
// console.log(res1)

// for each вычисление сумму элементов в массиве
// const arr = [1, 2,3,4,5,]
// let sum = 0
//  arr.forEach(function (el){
//      sum+=el
//  })
// console.log(sum)


//index of поиск индекса элемента по самому элементу
// const arr = [1, 2,3,4,5]
// const ind = arr.indexOf(3)
// console.log(ind)

// метод массива find возвравщает первый найденный элемент в массиве по заданному условию

// const arr = ['23','sdf','sdfs','sef']
// const res = arr.find((el)=>{
//     return el.length ==3
// })
// console.log(res)

// const arr = [1, 2,3 ,4,5,6]
// const res =  arr.find((num)=>{
//     return num%2==2
// })
// console.log(res)

//includes() проверяем входит ли искомое значение в наш массив  возвращает либо true либо false

// const num = [1,2,3,4,]
// const res = num.includes(4)
// console.log(res)

//filter не мутирует а возвращает новый массив в данном случае вернулся массив со строками длина которых больше 5 символов
// const words = ['sf','sfsf','sdfsfsf','sdfsfdsfdsf']
// const res = words.filter((str)=> str.length>5)
// console.log(res)


//sort ()
//1) мутирует исходный массив
//2) может сортировать без доп параметров по табличке unicode

// const names = ['alex', 'lexa','cana','miha']
// console.log(names.sort())
// console.log(names)

//по возрастанию
// const numbers =[1,2,3,545,-845,-4,14]
// const res = numbers.sort((a,b)=>a-b)
// console.log(res)

//по убыванию
// const numbers =[1,2,3,545,-845,-4,14]
// const res = numbers.sort((a,b)=>b-a)
// console.log(res)

// еще есть регистро независимая сортировка localCompare
// пример лога console.log(users.sort(a,b) => b.name.localCompare(a.name))


//sorted не мутирует исходные массив


//задача достать имена из объектов

const users = [
    {
        id:1,
        name:'bob',

    },
    {
        id:2,
        name:'mig',

    },
    {
        id:3,
        name:'len',

    },
]
function newMap(arr, callback){
    let result = []
    for (let i=0; i<arr.length; i++){
        result.push(callback(arr[i]))
    }
    return result
}

const res = newMap(users, (user)=>user.name)
console.log(res)