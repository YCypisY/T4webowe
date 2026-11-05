import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-corka',
  styleUrl: './corka.css',
  templateUrl: './corka.html',
})
export class Corka implements OnInit {
  @Input() doImportu!: string[];

  @Output() odpowiedz = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
    
  }

  wysylanie(){
    this.odpowiedz.emit("Przeczytane");
  }

}
