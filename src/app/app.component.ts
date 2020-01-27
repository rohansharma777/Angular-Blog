import { Component, Input } from '@angular/core';
import { Blog } from './blog.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    public form: any;
    public blogs: Blog[];
    
  constructor(){
    this.blogs = [];
  }
  

  addBlog($event){
    this.form = $event;
    this.blogs.push(new Blog(this.form.title, this.form.content, new Date(), 0));
  }
}
