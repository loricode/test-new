import { Component, OnInit } from '@angular/core';
import { Aeronave } from '../../interfaces/aeronave';
import { AeronaveService } from '../../service/aeronave.service';

@Component({
  selector: 'app-aeronave',
  templateUrl: './aeronave.component.html',
  styleUrls: ['./aeronave.component.css']
})
export class AeronaveComponent implements OnInit {

  aeronaves: Aeronave[] = []

  constructor( public aeronaveService: AeronaveService ) { }

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

 eventCcreate(event:any){
   this.aeronaves = [...this.aeronaves, event]
 }

 deleteNave(code: string){
    this.aeronaves = this.aeronaves.filter(item => item.code !== code)
 }

}
