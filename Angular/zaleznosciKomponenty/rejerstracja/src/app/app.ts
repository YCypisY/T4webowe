import { Component} from '@angular/core';
import { Rejerstrowanie, Pacjent } from './rejerstrowanie/rejerstrowanie';
import { Kolejka } from './kolejka/kolejka';

@Component({
  imports: [Rejerstrowanie, Kolejka],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  pacjenci: Pacjent[] = [];

dodajDokolejki(pacjent:Pacjent){
  this.pacjenci.push(pacjent)
}

}
