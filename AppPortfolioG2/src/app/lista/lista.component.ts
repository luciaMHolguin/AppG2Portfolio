import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { PortfolioService } from "app/portfolio.service";
import { Portfolio } from "app/portfolio";
=======
import { PortfolioService } from "../portfolio.service";
import { Portfolio } from "../portfolio";

>>>>>>> 82be2286efd628b05509e8890d3fd6b5697cd4cc
@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  arrayPortfolios: Array<Portfolio>;

  constructor(private servicioP: PortfolioService) {}

  ngOnInit() {
    this.actualizar();
  }
  actualizar(): void {
    this.arrayPortfolios = this.servicioP.listar();
  }
}
