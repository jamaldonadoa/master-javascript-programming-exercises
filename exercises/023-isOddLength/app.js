function isOddLength(word) {
    if (word.length%2 === 0) {
        return false
    } else {
        return true
    }
}

var output = isOddLength('speach');
console.log(output); // --> true