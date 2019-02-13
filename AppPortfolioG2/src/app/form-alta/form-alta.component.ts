import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD

=======
>>>>>>> 46367ea4adb77629cd69baeabb4959dd1c27c188
import { PortfolioService } from "app/portfolio.service";

@Component({
  selector: "app-form-alta",
  templateUrl: "./form-alta.component.html",
  styleUrls: ["./form-alta.component.css"]
})
export class FormAltaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido: string;

  descripcionIntroducida: string;
  ficheroIntroducido: string;
  servPortfolios: PortfolioService;

  constructor(sp: PortfolioService) {
    this.servPortfolios = sp;
  }

  ngOnInit() {
    this.titulo = "Alta de portolios";
    this.etiqueta_nombre = "Nombre";
    this.placeholder_nombre = "Introduzca Nombre y apellidos";
    this.nombreIntroducido = "El Innombrable";
  }
  limpiar() {
    this.nombreIntroducido = "";
    this.descripcionIntroducida = "";
    this.ficheroIntroducido = "";
    console.log("<<< Se supone que ha limpiado >>>");
  }
  darDeAlta() {
    // Lo justo para llamar al servicio
    this.servPortfolios.alta(
      this.nombreIntroducido,
      this.descripcionIntroducida,
      this.ficheroIntroducido
    );
    console.log("<<< Se supone que ha dado de alta >>>");
  }
}
