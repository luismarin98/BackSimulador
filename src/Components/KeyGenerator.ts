export class KeyGenerator {

  private longitud: number;
  private incluirMinusculas: boolean;
  private incluirMayusculas: boolean;
  private incluirNumeros: boolean;
  private incluirSimbolos: boolean;

  constructor(
    longitud: number = 12, incluirMinusculas: boolean = true, incluirMayusculas: boolean = true, incluirNumeros: boolean = true, incluirSimbolos: boolean = true
  ) {
    this.longitud = longitud;
    this.incluirMinusculas = incluirMinusculas;
    this.incluirMayusculas = incluirMayusculas;
    this.incluirNumeros = incluirNumeros;
    this.incluirSimbolos = incluirSimbolos;
  }

  public generarContraseña(): string {
    let caracteres: string[] = [];

    if (this.incluirMinusculas) {
      caracteres = caracteres.concat(Array.from('abcdefghijklmnopqrstuvwxyz'));
    }

    if (this.incluirMayusculas) {
      caracteres = caracteres.concat(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
    }

    if (this.incluirNumeros) {
      caracteres = caracteres.concat(Array.from('0123456789'));
    }

    if (this.incluirSimbolos) {
      caracteres = caracteres.concat(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '?']);
    }

    let contraseña: string = '';
    for (let i = 0; i < this.longitud; i++) {
      contraseña += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    return contraseña;
  }
}
