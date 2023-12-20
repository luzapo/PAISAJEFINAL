import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablavaloresComponent } from '../tablavalores/tablavalores.component';
import { VideotrabajarComponent } from '../videotrabajar/videotrabajar.component';
import { MapaencuentranosComponent } from '../mapaencuentranos/mapaencuentranos.component';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, TablavaloresComponent, VideotrabajarComponent, MapaencuentranosComponent],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {

}
