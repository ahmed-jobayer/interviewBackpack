const numvers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function totalOfEvenNumber(numbers: number[]) {
    return numbers.reduce((sum, currentNum) => {
        if (currentNum % 2 === 0) {
            return sum + currentNum
        } else {
            return sum
        }
    })
}


// console.log(totalOfEvenNumber(numvers));

