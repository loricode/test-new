import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aeronave } from '../../interfaces/aeronave';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() eventCode = new EventEmitter<string>()
  @Input() aeronaves: Aeronave[] = []

  constructor(  ) { }

  ngOnInit(): void {

  }


 childrenEventCode(code:string){

    this.eventCode.emit(code)
 }

}
