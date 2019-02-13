import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { PortfolioService } from "app/portfolio.service";
=======
import { PortfolioService } from "../portfolio.service";
import { Portfolio } from "../portfolio";

>>>>>>> 82be2286efd628b05509e8890d3fd6b5697cd4cc
@Component({
  selector: "app-form-alta",
  templateUrl: "./form-alta.component.html",
  styleUrls: ["./form-alta.component.css"]
})
export class FormAltaComponent implements OnInit {
  ng;
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
