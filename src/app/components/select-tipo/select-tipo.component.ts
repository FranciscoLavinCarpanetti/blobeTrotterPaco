import { ICategory } from './../../interfaces/icategory.interface';
import { PostsService } from './../../services/posts.service';
import { Component, EventEmitter, inject, Output } from '@angular/core';

@Component({
  selector: 'app-select-tipo',
  imports: [],
  templateUrl: './select-tipo.component.html',
  styleUrl: './select-tipo.component.css'
})
export class SelectTipoComponent {

  //este selector sus opciones de donde vienen? del servicio de la funcion getJobList.
  @Output() seleccionEmitida: EventEmitter<string> = new EventEmitter();
  ICategoryList: string[] = [];
  PostsServicesService = inject(PostsService);

  //cuando se llena esta jobList? cuando se cargue componente ngOnInit
  ngOnInit() {
    //llamando al servicio
    this.ICategoryList = this.PostsServicesService.getList();
  }


  getList(event: any) {
    //aqui tengo la seleccion la mando al padre que es userListComponent
    this.seleccionEmitida.emit(event.target.value)
  }

}


