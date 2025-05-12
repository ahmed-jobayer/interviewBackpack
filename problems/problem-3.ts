function squareNumber(num: number) {
    return num * num
}

function doubleNumber (num:number){
    return num *2
}

function add5ToNumber (num : number){
    return num + 5
}

function threeFunctionCombination (num: number) {
    return add5ToNumber(doubleNumber(squareNumber(num)))
}

// console.log(threeFunctionCombination(2));