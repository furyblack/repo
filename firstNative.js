

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