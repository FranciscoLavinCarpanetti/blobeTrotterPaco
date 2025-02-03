import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-serch',
  imports: [ReactiveFormsModule],
  templateUrl: './name-serch.component.html',
  styleUrl: './name-serch.component.css'
})
export class NameSerchComponent {
  @Output() BusquedaEmitida: EventEmitter<string> = new EventEmitter<string>()
  nameForm: FormGroup = new FormGroup({
    name: new FormControl("", [])
  });

  getName() {
    this.BusquedaEmitida.emit(this.nameForm.value.name);
    this.nameForm.reset();
  }

}
