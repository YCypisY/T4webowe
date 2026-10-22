import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Osoba } from './interface';
import { FormsModule } from '@angular/forms';



@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nazwisko:string = "Cieplinski";
  imie:string = "Kamil";

  potega:number = Math.pow(2,3);

  obrazek:string = "zdj1.jpg";
  obrazek2:string = "zdj2.jpg";


  osoba:Osoba = {
    imie: "",
    nazwisko: "",
    zdjecie: "",


  }

  pokazywaniezdjecia: boolean = true;

  pokazujZdjecia(){
    this.pokazywaniezdjecia = !this.pokazywaniezdjecia
  }

}
