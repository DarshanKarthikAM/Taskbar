var arrMarks = [10,20,30,40,50,60,70,77,88,99,90]
const result = arrMarks.filter(marks=>{
    return marks > 70
})

let total =0

const sum = arrMarks.forEach(marks=>{
    total += marks
})
console.log(total)