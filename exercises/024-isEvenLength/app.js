function isEvenLength(word) {
    if (word.length%2 === 0) {
        return true
    } else {
        return false
    }
}

var output = isEvenLength('speach');
console.log(output); // --> true// Write your function here