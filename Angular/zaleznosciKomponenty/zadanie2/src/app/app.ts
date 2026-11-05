import { Component, signal } from '@angular/core';

import { Syn } from './syn/syn';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Syn, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  doEksportu:string ="";
}
