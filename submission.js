// code challange question 1
const findSum = function(array) {
    let sum = 0

    for (let i = 0; i < array.length; i+=1) {
        sum += array[i]
        
    }

    console.log(sum)

    return sum
  }

  findSum([1, 4, 0, 9, -3]);

// code challange question 2
var findFrequency = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'],
    distribution = {},
    most = 0,
    result = [];

findFrequency.forEach(function (a) {
    distribution[a] = (distribution[a] || 0) + 1;
    if (distribution[a] > most) {
        most = distribution[a];
        result = [a];
        return;
    }
    if (distribution[a] === most) {
        result.push(a);
    }
});
console.log('most: ' + most);
console.log('key/s with most count: ' + JSON.stringify(result));
console.log(distribution)

// code challange question 3
function isPalindrome(str) {
    var reversed = '';
    for(var char of str) {
        reversed = char + reversed;
    }
    return reversed === str;
}
console.log(isPalindrome('canal'));
console.log(isPalindrome('racecar'));

// code challange question 4
function largestPair(arr) {
    let pair = arr[0] * arr[1]
    for(let i = 0; i < arr.length; i++) {
        let newPair = arr[i] * arr[i + 1]
        if(newPair > pair) pair = newPair
    }

    return pair
}

console.log(largestPair([1, 3, 8, 9, 6, 4]));


//code challang question 6
function scrabbleScore(word) {
    let newAlphabet = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },
        sum = 0,
        i;

    word = word.toLowerCase();
    for (i = 0; i < word.length; i++) {
        sum += newAlphabet[word[i]] || 0; // for unknown characters
    }
    return sum;
}

console.log(scrabbleScore('hello'))
