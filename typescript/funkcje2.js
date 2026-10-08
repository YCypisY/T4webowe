"use strict";
// funkcja showinfo
function showiInfo(informacja) {
    console.log("Info: " + informacja);
}
showiInfo("Zaraz dzwonek");
// function imiona(listaImion : string[]): void{
//     let ddd = [...listaImion]
//     console.log(ddd) 
// }
// let lista:string[] = ["Ewa", "Piotr", "Maciej"]
// imiona(lista)
function sumowanie(x, y) {
    return x + y;
}
console.log(`Suma liczb to ${sumowanie(10, 20)}`);
const suma = function (x, y = 10, z) {
    return x + y;
};
console.log(suma(30, 40, 3));
