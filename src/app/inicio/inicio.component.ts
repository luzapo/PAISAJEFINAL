import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionunoComponent } from '../seccionuno/seccionuno.component';
import { SecciondosComponent } from '../secciondos/secciondos.component';
import { SecciontresComponent } from '../secciontres/secciontres.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, SeccionunoComponent, SecciondosComponent, SecciontresComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
