import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';
import { POSTS } from '../db/post.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: IPost[] = POSTS;

  getAll(): IPost[] {
    return this.posts;
  }

  //insert(post: IPost): void {
  // this.posts.push(post);
  //}

  getByCategory(category: string): IPost[] {
    return this.posts.filter(post => post.category === category);
  }

  getById(id: number): IPost | undefined {
    return this.posts.find((post: IPost) => post.id === id);
  }

  createPost(post: IPost): void {
    POSTS.push(post);
  }
  getList(): string[] {
    return this.posts.map(post => post.category);
  }
  getByAuthor(authorName: string): IPost[] {
    return this.posts.filter(post =>
      post.author.toLowerCase().includes(authorName.toLowerCase()) // Búsqueda sin distinción de mayúsculas
    );
  }


}
