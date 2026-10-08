

let pi:number = 3.14

function zad5(): void {
    const r = 10;
    const h = 12;
    const l = Math.sqrt(r ** 2 + h ** 2);

    console.log(`Pole podstawy: ${pi * r ** 2}`);
    console.log(`Pole powierzchni bocznej: ${pi * r * l}`);
}


zad5()