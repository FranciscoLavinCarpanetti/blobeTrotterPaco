import { PostsService } from './../../services/posts.service';
import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  arrposts: IPost[] = [];
  PostsService = inject(PostsService)




  ngOnInit() {
    this.arrposts = this.PostsService.getAll()
  }




}
