import { IPost } from './../../interfaces/ipost.interface';
import { PostsService } from './../../services/posts.service';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-post-view',
  imports: [RouterLink],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {
  @Input() idPost: string = '';
  PostsService = inject(PostsService)
  router = inject(Router)
  usuario!: IPost;





  selectPost(id: number) {
    this.router.navigate(['/post', id])
  }

}

