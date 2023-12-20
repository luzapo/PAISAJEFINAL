import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { EquipoComponent } from './equipo/equipo.component';
import { SeccionunoComponent } from './seccionuno/seccionuno.component';

export const routes: Routes = [
    {
        path: "inicio",
        component: InicioComponent
    },

    {
        path: "equipo",
        component: EquipoComponent
    },

    {
        path: "sobrenosotros",
        component: SobrenosotrosComponent
    },

    {
        path: "",
        redirectTo: "/inicio",
        pathMatch: "full"
    }
];
