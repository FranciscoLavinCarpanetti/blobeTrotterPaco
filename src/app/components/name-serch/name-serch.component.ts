import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-search', // Corregido el selector
  templateUrl: './name-serch.component.html',
  styleUrls: ['./name-serch.component.css']
})
export class NameSerchComponent {
  @Output() BusquedaEmitida: EventEmitter<string> = new EventEmitter<string>();

  nameForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]) // Se añadió validación para evitar búsquedas vacías
  });

  getName() {
    if (this.nameForm.valid) { // Solo emite si el formulario es válido
      this.BusquedaEmitida.emit(this.nameForm.value.name.trim()); // Elimina espacios extra
      this.nameForm.reset();
    }
  }
}
