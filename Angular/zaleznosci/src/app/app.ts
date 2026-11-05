import { Component, signal } from '@angular/core';
import { Corka } from './corka/corka';
import { Wnuk } from './wnuk/wnuk';

@Component({
  imports: [Corka, Wnuk],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'komponent2';
  doEksportu: string[] = ['8:00', "Szkola"];

  onOdpowiedz(otrzymane: string){
    alert(otrzymane)
  }

}
