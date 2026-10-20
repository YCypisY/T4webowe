import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';




@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nazwisko:string = "Cieplinski";
  imie:string = "Kamil";

  potega:number = Math.pow(2,3);

  obrazek:string = "zdj1.jpg";
  obrazek2:string = "zdj2.jpg"

}
