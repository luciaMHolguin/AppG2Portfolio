import { Injectable } from "@angular/core";
import { Portfolio } from "./portfolio";
//import { ListWrapper } from '@angular/platform-browser/src/facade/collection';

@Injectable()
export class PortfolioService {
  lista: Array<Portfolio>;
  ls: Storage;
  posActual: number;
  constructor() {
    console.log("<<< CREANDO SERVICIO >>> ");
    this.lista = new Array<Portfolio>();
    this.ls = window.localStorage;

    if (typeof Storage === "undefined") {
      // Sorry! No Web Storage support..
      alert("No se pueden guardar los datos");
    } else {
      // para ver el uso del almacenatmiento local: https://www.w3schools.com/HTML/html5_webstorage.asp

      this.posActual = 0;
      if (this.ls.getItem("portfolios") == null) {
        this.lista = [];
        this.guardarEnLocal();
      } else {
        this.cargarDesdeLocalStorage();
      }
    }
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
  public guardarEnLocal() {
    var arrayEnTexto = JSON.stringify(this.lista);
    this.ls.setItem("portfolios", arrayEnTexto); //array ls es el local storage
  }
  public cargarDesdeLocalStorage() {}
  public mostrarGaleria() {}
}
