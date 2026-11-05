import { Component, Input } from '@angular/core';
import { Pacjent } from '../rejerstrowanie/rejerstrowanie';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-kolejka',
  styleUrl: './kolejka.css',
  templateUrl: './kolejka.html',
})
export class Kolejka {

  @Input() pacjenci:Pacjent[] = [];

}
