import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { AdminComponent } from './Components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Services/AuthGuard';
import { AuthService } from './Services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { LideresComponent } from './Components/lideres/lideres.component';
import { CursosComponent } from './Components/cursos/cursos.component';
import { CatalogosComponent } from './Components/catalogos/catalogos.component';
import { MiempresaComponent } from './Components/miempresa/miempresa.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { NotificacionesComponent } from './Components/notificaciones/notificaciones.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { RecompensaComponent } from './Components/recompensa/recompensa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ConfirmDialogComponent,
    AdminComponent,
    UsuariosComponent,
    LideresComponent,
    CursosComponent,
    CatalogosComponent,
    MiempresaComponent,
    EventosComponent,
    NotificacionesComponent,
    ReportesComponent,
    RecompensaComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class AppModule { }
