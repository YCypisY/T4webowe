import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sprawdzian');

  imieNazwisko:string = "malgorzata";
  avatarUrl:string = "zdj1.jpg";
  polubienia:number = 0;

  pokazywanieReset:boolean = false

  dodawanie() :void{
    this.polubienia +=1;
    this.pokazywanieReset = true
  }

  reset():void{
    this.polubienia = 0;
    this.pokazywanieReset = false
  }
}
