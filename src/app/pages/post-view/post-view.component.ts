import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IPost } from '../../interfaces/ipost.interface';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
  imports: [RouterLink]
})
export class PostViewComponent {
  ipostData!: IPost;
  private postsService = inject(PostsService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const response = this.postsService.getById(Number(id));
      if (response) {
        this.ipostData = response;
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      this.router.navigate(['/home']);
    }
  }
}
