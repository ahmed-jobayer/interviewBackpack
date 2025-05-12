// probleem 1

type TPeople = {
    name: string;
    age: number;
    gender: 'Male' | 'Female'
}

const peopleArr: TPeople[] = [
    { name: 'a', age: 20, gender: "Male" }, 
    { name: 'b', age: 20, gender: "Female" },
    { name: 'c', age: 20, gender: "Male" },
    { name: 'd', age: 20, gender: "Female" },
]



function getMalePersonName(personArray:TPeople[]) {
    return personArray
    .filter(person=> person.gender !== "Female")
    .map(person => person.name)
}


const result = getMalePersonName(peopleArr)
// console.log(result);