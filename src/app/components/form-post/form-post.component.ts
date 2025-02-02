import { PostsService } from './../../services/posts.service';
import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent {
  arrPost: IPost[] = [];
  PostsService = inject(PostsService, { self: true });
  postForm: FormGroup;

  constructor() {
    this.postForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      salario: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.postForm?.valid) {
      const formData = this.postForm.value;
      this.PostsService.createPost(formData);
      this.arrPost.push(formData);
      this.postForm.reset();
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
