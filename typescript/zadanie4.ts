

function potega(liczba:number, potega:number):number{
    return liczba**potega
}

let fun = (liczba:number, potega:number):number => liczba**potega

console.log(potega(4,5))
console.log(fun(6,3))