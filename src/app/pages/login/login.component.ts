import { PostsService } from './../../services/posts.service';
import { Component, inject } from '@angular/core';
import { RegistroComponent } from '../registro/registro.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RegistroComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  PostsService = inject(PostsService);
  router = inject(Router);
  usuarioService: any;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  async getLogin() {
    if (this.loginForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    try {
      let response = await this.usuarioService.login(this.loginForm.value);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/home']);
    } catch (error: any) {
      let errorMessage = error?.error?.error || 'Error desconocido al iniciar sesión';
      Swal.fire({
        title: 'Ha ocurrido un error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}

