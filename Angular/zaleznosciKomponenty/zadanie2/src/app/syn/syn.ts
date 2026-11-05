import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-syn',
  styleUrl: './syn.css',
  templateUrl: './syn.html',
})
export class Syn implements OnInit{
  @Input() doImportu!: string[];


  constructor(){}
  ngOnInit(): void {
    
  }

}
