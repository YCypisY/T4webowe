"use strict";
function wartoscBezwzgledna(liczba) {
    if (liczba < 0) {
        return liczba * -1;
    }
    else {
        return liczba;
    }
}
function BMI(waga, wzrost) {
    let bmi = waga / (wzrost * wzrost);
    if (bmi < 18.5) {
        console.log("za mało!");
        return;
    }
    else if (bmi < 25) {
        console.log("OK!");
        return;
    }
    else {
        console.log("za duzo!");
        return;
    }
}
function filteryyy(tablica) {
    const numery = [2, 4, 7, 11, 14, 19, 21, 100];
    console.log(numery.filter(l => l % 2 == 0));
    console.log(numery.filter(l => l % 2 == 1));
}
function potega(liczba, potega) {
    return liczba ** potega;
}
(liczba, potega) => liczba ** potega;
let pi = 3.14;
function zad5() {
    let r = 10;
    let h = 12;
    let l = Math.sqrt(r * r + h * h);
    let polePodstawy = pi * r * r;
    let poleBoczne = pi * r * l;
    console.log("Pole podstawy: " + polePodstawy);
    console.log("Pole powierzchni bocznej: " + poleBoczne);
}
