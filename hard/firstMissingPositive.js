let nums = [-5]

nums.sort()
let maiorNumero = Math.max(...nums)

if (maiorNumero < 1) {
    console.log(1)
}

for (let i = 1; i <= maiorNumero + 2; ++i) {
    if (!nums.includes(i)) {
        console.log(i)
        break
    }
}