import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { PostViewComponent } from './pages/post-view/post-view.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: 'home', component: PostListComponent },
  { path: 'new', component: FormPostComponent },
  {
    path: 'post', component: PostListComponent,
    children: [{
      path: ':id',
      component: PostViewComponent
    }]
  },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];
