import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form-nave',
  templateUrl: './modal-form-nave.component.html',
  styleUrls: ['./modal-form-nave.component.css']
})
export class ModalFormNaveComponent implements OnInit {

  @Output() eventCreate = new EventEmitter<Object>()

  myForm =  this.fb.group({
    code:['', [Validators.required]],
    name:['', [Validators.required]]
  })

  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  createAeronave(){
    this.eventCreate.emit(this.myForm.value)
  }

}
