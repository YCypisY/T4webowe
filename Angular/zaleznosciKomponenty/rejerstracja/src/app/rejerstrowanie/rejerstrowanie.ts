import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Pacjent{
  imie:string,
  nazwisko:string,
  pesel:string,
  lekarz:string
}


@Component({
  imports: [FormsModule],
  selector: 'app-rejerstrowanie',
  styleUrl: './rejerstrowanie.css',
  templateUrl: './rejerstrowanie.html',
})

export class Rejerstrowanie {
  @Output() dodajpacjenta = new EventEmitter<Pacjent>();

  imie = "";
  nazwisko ="";
  pesel = "";
  lekarz = "";

  zarejestruj(){
    if(!this.imie || !this.nazwisko || !this.lekarz || !this.pesel ){
      alert("Uzupełnij wszytkie pola");
      return;
    }

    if (!/^\d{11}$/.test(this.pesel)) {
      alert('PESEL musi mieć 11 cyfr!');
      return;
    }

    const pacjent: Pacjent = {
      imie: this.imie,
      nazwisko: this.nazwisko,
      pesel: this.pesel,
      lekarz: this.lekarz
    }

    this.dodajpacjenta.emit(pacjent)

    this.imie = "";
    this.nazwisko ="";
    this.pesel = "";
    this.lekarz = "";

  }


  


}
