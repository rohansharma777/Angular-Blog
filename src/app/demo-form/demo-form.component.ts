import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from '../blog.model'

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  constructor() { }

  @Output() form = new EventEmitter<Blog>();

  ngOnInit() {
  }
  
  onSubmit(form: Blog){
    console.log("Demo component received: ", form.title);
    this.form.emit(form);
  }

}
