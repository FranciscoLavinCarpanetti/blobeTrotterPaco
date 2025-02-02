import { PostsService } from './../../services/posts.service';

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroForm: FormGroup;
  PostsService = inject(PostsService)



  constructor() {
    this.registroForm = new FormGroup({
      username: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
    }, []);
  }


}
