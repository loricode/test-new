import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Aeronave } from '../../interfaces/aeronave';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() eventData = new EventEmitter<string>()
  @Input() item!:Aeronave;

  constructor() { }

  ngOnInit(): void {
  }

  public handleData(code:string):void{
    this.eventData.emit(code);
  }

}
