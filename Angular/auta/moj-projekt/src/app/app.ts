import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Samochod, Rodzaj, Stopka } from './interfejs_samochod';


@Component({
  imports: [RouterOutlet, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  Rodzaj = Rodzaj;

  samochody:Samochod[]= [
    {
      marka: "Ferrari",
      model: "California",
      zdjecie: "ferrari_california.jpg",
      dane: ['do setki 3,2 s', 'cena 0,5 mln euro'],
      type: Rodzaj.sportowy
    },
    {
      marka: "BMW",
      model: "X5",
      zdjecie: "bmw_x5.jpg",
      dane: ['do setki 11 s', 'cena 100 000 euro'],
      type: Rodzaj.suv
    },
    {
      marka: "Mercedes",
      model: "CLS",
      zdjecie: "fmercedes_cls.jpg",
      dane: ['do setki 3,8 s', 'cena 0,4 mln euro'],
      type: Rodzaj.cabrio
    },
  ];

samochod: Samochod | null = this.samochody[0];
  kolorb: string = 'white';
  kolort: string = 'black';
  aktywna: boolean = true;
  pokazZdjecie: boolean = false;

  zmienKolor(){
    this.kolorb = this.kolorb === 'white' ? 'black' : 'white';
    this.kolort = this.kolort === 'black' ? 'white' : 'black';
  }

  stopka: Stopka ={
    tekst: "tekscikkk",
    autor: "JAAA",
    rok: "2026"
  }



}
