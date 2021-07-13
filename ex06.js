function fatorial(n) {
    res = n
    for (let i=n-1; i>=1; i--) {
        res = res*i
    }
    return res
}

function fatzeroadez() {
    for(i=0;i<=10;i++) {
        console.log(fatorial(i))
    }
}