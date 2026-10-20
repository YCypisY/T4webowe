"use strict";
const sam = [
    {
        marka: "Audi",
        model: "A4"
    },
    {
        marka: "BMW",
        model: "540i"
    },
    {
        marka: "Mercedes",
        model: "S450"
    }
];
function pokaz(sam) {
    sam.forEach(x => console.log("Pojazd: " + x.marka + " " + x.model));
}
function pokazodtylu(sam) {
    for (let i = sam.length - 1; i >= 0; i--) {
        console.log("Pojazd: " + sam[i].marka + " " + sam[i].model);
    }
}
pokaz(sam);
pokazodtylu(sam);
