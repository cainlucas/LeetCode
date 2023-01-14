var inteiroParaRomano = function(num) {

    let nums =
    [[1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']]

    let arrayNums = []
    for (let i = 0; i < nums.length; i++) {
        quociente = Math.floor(num / nums[i][0])
        resto = num % nums[i][0]
        num = resto
        arrayNums.push(nums[i][1].repeat(quociente))
    }
    return arrayNums.join('')
};

console.log(inteiroParaRomano(num = 43))
