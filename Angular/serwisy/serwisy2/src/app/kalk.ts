import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Kalk {

    dodaj(a: number, b:number):number{
        return a+b;
    }
    odejmij(a: number, b:number):number{
        return a-b;
    }
    pomnoz(a: number, b:number):number{
        return a*b;
    }
    podziel(a: number, b:number):number{
        if(a==0){
            throw new Error("Nie dzielę przez zero.");
        }

        return a/b;
    }

}
