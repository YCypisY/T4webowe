"use strict";
function BMI(waga, wzrost) {
    let bmi = waga / (wzrost * wzrost);
    console.log(bmi < 18.5 ? "za mało!" : bmi < 25 ? "OK!" : "za dużo!");
}
BMI(200, 1.80);
