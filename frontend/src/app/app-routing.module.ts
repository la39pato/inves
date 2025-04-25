import { Route } from '@angular/router';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige al inicio
  { path: 'home', component: IniciosesionComponent }, // Ruta para la página 1

];