import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-sobrenosotros',
  standalone: true,
  imports: [CommonModule, NosotrosComponent, TarjetasComponent,FormularioComponent],
  templateUrl: './sobrenosotros.component.html',
  styleUrl: './sobrenosotros.component.css'
})
export class SobrenosotrosComponent {

}
