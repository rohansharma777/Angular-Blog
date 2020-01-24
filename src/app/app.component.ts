import { Component, Input } from '@angular/core';
import { Blog } from './blog.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    public form: Blog;
    public blogs: Blog[];
    

  

  addBlog($event){
    this.form = $event;
    this.blogs.push(new Blog(this.form.title, this.form.content, new Date(), 0));

    for(let blog of this.blogs){
      console.log("The app component received blog with title: ", blog.title);
      console.log("and content: ", blog.content);
    }
  }
}
