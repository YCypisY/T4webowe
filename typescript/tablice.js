"use strict";
// let kolory = ["Czerwony", "Niebieski", "Zieolny", "Czarny"]
// console.log(kolory)
// for (let i = 0;i<kolory.length;i++){
//     console.log(kolory[i])
// }
// kolory.push("Biały")
// console.log(kolory)
// kolory.unshift("Żółty")
// console.log(kolory)
// kolory.shift()
// console.log(kolory)
// kolory.splice(2,1,"Fioletowy")
// console.log(kolory)
// let kolory2 = kolory.slice(2,4)
// console.log(kolory2)
// //-------------------------------
// let liczby:number[] = [1,2,3,4,5,6,7,8]
// let kwadraty = liczby.map(l => l*l)
// console.log(kwadraty)
// let parzyste = liczby.filter(l => l%2 == 0)
// console.log(parzyste)
// let sumaliczb = liczby.reduce((acc, l) => acc + l, 0);
// console.log(sumaliczb);
// let szukane = liczby.find(l => l>4);
// console.log(szukane);
// let szukaneIDX = liczby.findIndex(l => l>4)
// console.log(szukaneIDX)
// let tf:boolean[] = [true, true, false]
// let ok = tf.some(t => t == false)
// console.log(ok)
// let kazdy = tf.every(t => t == true)
// console.log(kazdy)
// console.log(kolory)
// kolory.sort();
// console.log(kolory)
// kolory.reverse()
let tab1 = ["Jan", "Adam", 'Zenon'];
let tab2 = ["Anna", "Anita", 'Liza'];
tab2 = tab2.concat(tab1);
console.log(tab2);
let ludzie = tab2.join(", ");
console.log(ludzie);
console.log(tab1);
console.log(tab2);
let ludziska = [...tab1, ...tab2];
console.log(ludziska);
