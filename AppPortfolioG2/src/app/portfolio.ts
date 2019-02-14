export class Portfolio {
  constructor(
    public nombre: string,
    public descripcion: string,
    public fichero: string
  ) {
    if (this.nombre == "") {
      throw new Error("Nombre no puede ser vacío");
    }
  }
public getNombre(): string {
return this.nombre;
}

public getDesc(): string {
return this.descripcion;
}

public getUrl(): string {
return this.fichero;
}
}
