import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Kalkulator {
    dodaj(...liczby:number[]):number{
        let wynik = 0;
        for(let liczba of liczby){
            wynik+=liczba;
        }
        return wynik;
    }
}
