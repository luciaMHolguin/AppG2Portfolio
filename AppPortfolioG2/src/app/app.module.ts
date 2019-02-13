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
import { GaleriaCompComponent } from './galeria-comp/galeria-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContenedorComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent,
    GaleriaCompComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
