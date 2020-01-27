import { Component, Input } from '@angular/core';
import { Blog } from '../blog.model'

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent {
  @Input() blogs: Blog[]; 

  like(blog: Blog){
    blog.like();
  }
  dislike(blog: Blog){
    blog.dislike();
  }
}
