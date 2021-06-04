/* 
CIT 281 Project 1
Name: Shuxi Wu */

let array = 'abcdefghijklmnopqrstuvwxyz'.split('')
function getRandomInteger(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min) //+1 to include max
}
let string = []
for(let i = 0; i <= getRandomInteger(4, 24); i++) {
    let index = getRandomInteger(0, 25)
    string.push(array[index])
}
console.log(string.join(''))

