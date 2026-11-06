import { Component, signal } from '@angular/core';
import { Kalkulator } from './kalkulator';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  providers: [Kalkulator]
})
export class App {
  dodawanie:number = 0;

  constructor(kalkulator: Kalkulator){
    this.dodawanie = kalkulator.dodaj(3,3,3,3,32)
  }

}
