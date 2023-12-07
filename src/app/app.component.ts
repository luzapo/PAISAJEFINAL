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
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BannerComponent, HeaderComponent, RedessocialesComponent, InicioComponent, SobrenosotrosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hola cedinsi';
}
