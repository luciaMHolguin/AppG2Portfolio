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
import { GaleriaCompComponent } from "./galeria-comp/galeria-comp.component";
import { NavComponent } from "./app-contenedor/nav/nav.component";
import { InicioComponent } from "./inicio/inicio.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: InicioComponent },
  { path: "verportfolios", component: ListaComponent },
  { path: "galeria", component: GaleriaCompComponent },
  { path: "editor", component: FormAltaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppContenedorComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent,
    GaleriaCompComponent,
    NavComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
