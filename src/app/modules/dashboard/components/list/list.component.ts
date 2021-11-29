import { Component, OnInit } from '@angular/core';
import { Aeronave } from '../../interfaces/aeronave';
import { AeronaveService } from '../../service/aeronave.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  aeronaves: Aeronave[] = []

  constructor( private aeronaveService: AeronaveService ) { }

  ngOnInit(): void {
    this.getAeronaves();
  }

  private getAeronaves(): void {
    this.aeronaveService.getAeronaves().subscribe(
      resp => {
        this.aeronaves = resp.aeronaves
      }
    )
 }

 childrenEventCode(code:string){
    this.aeronaves =  this.aeronaves.filter( item => item.code !== code)
 }

}
