import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NameSerchComponent } from '../name-serch/name-serch.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
