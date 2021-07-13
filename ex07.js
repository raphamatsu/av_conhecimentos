function fibonacci(lim){
    var i = 0
    var j = 1
    console.log(i)
    console.log(j)
do {
    var res = i + j
    console.log(res)
    i = j
    j = res
} while (res<=lim)
}