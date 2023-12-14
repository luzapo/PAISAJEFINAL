import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

export const routes: Routes = [
    {
        path: "inicio",
        component: InicioComponent
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
