import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  constructor() { }

  @Output() form = new EventEmitter<any>();

  ngOnInit() {
  }
  
  onSubmit(form: any){
    this.form.emit(form);
  }

  clearIt(title: HTMLInputElement, content: HTMLInputElement){
    title.value = "";
    content.value = "";
  }

}
