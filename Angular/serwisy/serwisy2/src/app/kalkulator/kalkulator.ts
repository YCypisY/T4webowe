import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kalk } from '../kalk';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-kalkulator',
  styleUrl: './kalkulator.css',
  templateUrl: './kalkulator.html',
})
export class Kalkulator {

  liczba1:number = 0;
  liczba2:number = 0;
  wynik: {suma: number, roznica:number, iloczyn:number, iloraz:number} | null = null;

  errorMessage: string | null = null;

  constructor(private kalkService: Kalk){}

  oblicz():void{
    try{
      this.errorMessage = null;
      const suma = this.kalkService.dodaj(this.liczba1, this.liczba2)
      const roznica = this.kalkService.odejmij(this.liczba1, this.liczba2)
      const iloczyn = this.kalkService.pomnoz(this.liczba1, this.liczba2)
      const iloraz = this.kalkService.podziel(this.liczba1, this.liczba2)
      this.wynik = {suma,roznica,iloczyn,iloraz};
    }
    catch(error:any){
      this.errorMessage = error.message;
      this.wynik = null;
    }

    

  }




}
