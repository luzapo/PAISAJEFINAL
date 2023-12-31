import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-redessociales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './redessociales.component.html',
  styleUrl: './redessociales.component.css'
})
export class RedessocialesComponent {
  scrollto(ancla: string) { const element = document.getElementById(ancla); if (element) { element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }); } }
}
