import { NameSerchComponent } from '../../components/name-serch/name-serch.component';
import { SelectTipoComponent } from '../../components/select-tipo/select-tipo.component';
import { IPost } from './../../interfaces/ipost.interface';
import { PostsService } from './../../services/posts.service';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, NameSerchComponent, SelectTipoComponent],
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


  serchByName(event: string) {
    this.arrposts = this.PostsService.getByAuthor(event)
  }

  nBusquedaEmitida(busqueda: string) {
    this.filteredPosts = this.arrposts.filter(post => post.title.toLowerCase().includes(busqueda.toLowerCase()));
  }



}
