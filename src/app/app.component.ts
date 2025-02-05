import { SelectTipoComponent } from './components/select-tipo/select-tipo.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { IPost } from './interfaces/ipost.interface';
import { NameSerchComponent } from './components/name-serch/name-serch.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SelectTipoComponent, NameSerchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blobeTrotterPaco';
  post: IPost[] = [];
  filteredPosts: IPost[] = [];







}
