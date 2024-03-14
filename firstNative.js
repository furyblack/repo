

function sum(a: number,b:number){
    return a+b
}
sum(8,9)

function mult(a, b){
    return a*b

}


function splitintowords(sentence: string){
    const words = sentence.toLocaleLowerCase().split('')
    return words.filter(w=> w!=='', w!=='-')
        .map(w=>w
            .replace('!', '')
            .replace('.','')
            .replace(',', '')
        )
}



const name  = 'ya'
const studenkt = {
    'name' :'MIha',

    age:20,
    heigth: 140,

}

const room ={
    "walls": '4 ',
    name: 'fittitn',

}
type studentType = {

}

const student ={
    name: 'dfl',
    age: 23,
    height: 34,
    adress: {
        citytitle: "almaty",
        street: 'abylay khana'
    },
    tehnologys:[
        {
            id: 24,
            title: 'df'
        },
        {
            id: 233,
            title: 'dflj'
        }
    ]

}

console.log(student)

console.log(student.tehnologys[2]
)


function sum(a: number, b: number){
    return a+b
}
sum(5, 5)



export const addSkill = (student:Student=StudentType, skill: string) =>{
    student.technologies.push({
        id: new Date().getDate(),
        title: skill
    })

}

export function maked (s: string){
    return "sdf"
}
export const doesStudentLiveIn= (city: string, id: 13) =>{
    return city='sldfj'
}

const ages = [14,325,345,1,2,56]

type courseType = {
    title:string
    price: number
}
const course =[
    {title: 'css', price: 22},
    {title: 'htms', price: 2342342},
    {title: 'js', price: 222},
]
const cheapeCourse = ()=>{
    return course.price<160;
}
const  ages =[12,23,65,99,100]

const oldAges = [100];

