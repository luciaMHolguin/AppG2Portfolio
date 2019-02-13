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
<<<<<<< HEAD
import { GaleriaCompComponent } from './galeria-comp/galeria-comp.component';
=======
import { NavComponent } from './app-contenedor/nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
>>>>>>> 46367ea4adb77629cd69baeabb4959dd1c27c188

@NgModule({
  declarations: [
    AppComponent,
    AppContenedorComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent,
<<<<<<< HEAD
    GaleriaCompComponent
=======
    NavComponent,
    InicioComponent
>>>>>>> 46367ea4adb77629cd69baeabb4959dd1c27c188
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
