import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  mostrarMensaje = false
  registroForm = new FormGroup({
    usuario: new FormControl("", [Validators.required, Validators.minLength(5)]),
    clave: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  get usuario() {
    return this.registroForm.get("usuario")?.value
  }

  get clave() {
    return this.registroForm.get("clave")?.value
  }

  registrarUsuario() {
    const estadoFormulario = this.registroForm.status
    console.log(this.registroForm, this.usuario, this.clave)
    console.log(this.registroForm)
    this.mostrarMensaje = false
    if (this.registroForm.status == "INVALID") {
      this.mostrarMensaje = true
    }

  }

}
