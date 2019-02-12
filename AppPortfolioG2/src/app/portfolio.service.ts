import { Injectable } from "@angular/core";
import { Portfolio } from "./portfolio";
//import { ListWrapper } from '@angular/platform-browser/src/facade/collection';

@Injectable()
export class PortfolioService {
  lista: Array<Portfolio>;
  constructor() {
    console.log("<<< CREANDO SERVICIO >>> ");
    this.lista = new Array<Portfolio>();
  }
  public alta(nombre: string, desc: string, fich: string): void {
    let nuevoPortfolio: Portfolio;
    nuevoPortfolio = new Portfolio(nombre, desc, fich);
    this.lista.push(nuevoPortfolio);
    console.log("<<< ALTA PORTFOLIO: " + nombre + " >>>");
  }
  public baja(nombre: string) {
    console.log("<<< BAJA PORTFOLIO: " + nombre + " >>>");
  }
  public listar(): Array<Portfolio> {
    console.log("<<< LISTA PORTFOLIOs: " + this.lista.toString() + " >>>");
    return this.lista;
  }
}
