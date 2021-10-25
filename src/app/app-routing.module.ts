import { NgModule } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import {AuthGuard} from  './Services/AuthGuard';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { LideresComponent } from './Components/lideres/lideres.component';
import { CursosComponent } from './Components/cursos/cursos.component';
import { CatalogosComponent } from './Components/catalogos/catalogos.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { MiempresaComponent } from './Components/miempresa/miempresa.component';
import { NotificacionesComponent } from './Components/notificaciones/notificaciones.component';
import { RecompensaComponent } from './Components/recompensa/recompensa.component';
import { ReportesComponent } from './Components/reportes/reportes.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'administrador', component: AdminComponent, canActivate: [AuthGuard]},
  {path:'usuarios', component:  UsuariosComponent, canActivate: [AuthGuard]},
  {path:'lideres', component:  LideresComponent, canActivate: [AuthGuard]},
  {path:'cursos', component:  CursosComponent, canActivate: [AuthGuard]},
  {path:'catalogos', component:  CatalogosComponent, canActivate: [AuthGuard]},
  {path:'eventos', component:  EventosComponent, canActivate: [AuthGuard]},
  {path:'miempresa', component:  MiempresaComponent, canActivate: [AuthGuard]},
  {path:'notificaciones', component: NotificacionesComponent , canActivate: [AuthGuard]},
  {path:'recompensa', component: RecompensaComponent, canActivate: [AuthGuard]},
  {path:'reportes', component:  ReportesComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
