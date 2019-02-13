import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "app/portfolio.service";
import { Portfolio } from "app/portfolio";
<<<<<<< HEAD

=======
>>>>>>> 46367ea4adb77629cd69baeabb4959dd1c27c188
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
