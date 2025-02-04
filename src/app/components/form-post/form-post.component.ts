import { PostsService } from './../../services/posts.service';
import { IPost } from './../../interfaces/ipost.interface';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-form-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent {
  arrPost: IPost[] = [];

  postForm: FormGroup = new FormGroup({});

  PostsService = inject(PostsService)

  constructor() {
    this.postForm = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60),
      ]),
      text: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(300),
      ]),
      author: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60),
      ]),
      image: new FormControl("", [
        Validators.required,
        Validators.pattern(/^.*\.(jpg|jpeg|png|gif)$/)
      ]),
      date: new FormControl("", [
        Validators.required,
      ]),
      category: new FormControl("", [
        Validators.required,])
    });

  }

  getDataForm() {
    if (this.postForm.valid) {
      const existingPosts = this.PostsService.getAll();
      const lastId = existingPosts.length > 0
        ? Math.max(...existingPosts.map(post => post.id).filter(id => id !== undefined))
        : 0;

      const newPost: IPost = {
        id: lastId + 1,
        title: this.postForm.value.title,
        text: this.postForm.value.text,
        author: this.postForm.value.author, // Corregido de "author"
        image: this.postForm.value.image,
        date: this.postForm.value.date, // Corregido de "date"
        category: this.postForm.value.category
      };

      this.PostsService.createPost(newPost);


      console.log('Nuevo post agregado:', newPost);
      console.log('Lista de posts actualizada:', this.PostsService.getAll());
      Swal.fire({
        title: "¿Quieres crear el post?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Crear Post!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "¡Post creado!",
            text: "Te confirmamos que tu post ha sido creado.",
            icon: "success"
          });
        }
      });

      this.postForm.reset();
    } else {
      console.warn('El formulario tiene errores, no se puede agregar el post.');
    }
  }






  chechErrorField(field: string, err: string): boolean {
    if (this.postForm.get(field)?.hasError(err) && this.postForm.get(field)?.touched) {
      return true;
    }
    return false;
  }

}

