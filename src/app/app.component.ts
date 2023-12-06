import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { RedessocialesComponent } from './redessociales/redessociales.component';
import { SeccionunoComponent } from './seccionuno/seccionuno.component';
import { FooterComponent } from './footer/footer.component';
import { SecciondosComponent } from './secciondos/secciondos.component';
import { SecciontresComponent } from './secciontres/secciontres.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BannerComponent, HeaderComponent, RedessocialesComponent, SeccionunoComponent, SecciondosComponent, SecciontresComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hola cedinsi';
}
