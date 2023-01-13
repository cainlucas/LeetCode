// https://leetcode.com/problems/palindrome-number/


var isPolindrome = function(x) {
    const numberString = x.toString()
    const stringInvertida = numberString.split('').reverse().join('')
    if (stringInvertida === numberString)
        return true
        return false

}
console.log(isPolindrome(121))
