import { IPost } from './../../interfaces/ipost.interface';
import { PostsService } from './../../services/posts.service';
import { Component, inject, Input } from '@angular/core';
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
  @Input() IPost!: IPost

  ngOnInit() {
    this.arrposts = this.PostsService.getAll()
  }

}
