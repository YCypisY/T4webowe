"use strict";
let tablicz = [6, 7, 8]; // stare
let tablica2 = [8, 7, 6, 4];
let tuple = ["jan", 30];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c = Color.green;
// typ object
let klient = { imie: "jan", wiek: 30 };
