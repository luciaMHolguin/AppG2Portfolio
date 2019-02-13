import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppContenedorComponent } from "./app-contenedor/app-contenedor.component";
import { FormAltaComponent } from "./form-alta/form-alta.component";
import { FormBajaComponent } from "./form-baja/form-baja.component";
import { ListaComponent } from "./lista/lista.component";
import { PortfolioService } from "./portfolio.service";
import { NavComponent } from './app-contenedor/nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContenedorComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent,
    NavComponent,
    InicioComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
