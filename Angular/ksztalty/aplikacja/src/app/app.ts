import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Kolor } from './interjesykolory';

@Component({
  imports: [RouterOutlet, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  wybrany:number = 1;

   zmien() {
    this.wybrany = this.wybrany === 1 ? 2 : 1;
  }


  tekst:string = "";
  wynik:string = "";

  sprawdz(){
    if(!isNaN(Number(this.tekst))){
      this.wynik = "liczba";
    }
    else{
      this.wynik = "tekst";
    }
  }

  kolor:Kolor = 1;
  zmieniaKol() {
  this.kolor = this.kolor === Kolor.green
    ? this.kolor + 1
    : this.kolor + 1;
}

  


}
