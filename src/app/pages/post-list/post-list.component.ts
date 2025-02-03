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
  filteredPosts: IPost[] = []
  @Input() IPost!: IPost

  ngOnInit() {
    this.arrposts = this.PostsService.getAll()
    this.filteredPosts = this.arrposts
  }

  nBusquedaEmitida(busqueda: string) {
    this.filteredPosts = this.arrposts.filter(post => post.title.toLowerCase().includes(busqueda.toLowerCase()));
  }
}
