// Ejemplo de validadores personalizados
import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);

    if (value > 10000) {
      // Se retorna un objeto con el nombre del error en true
      // Sí y solo sí el dato es inválido.
      return { price_invalid: true };
    }
    return null;
  }

}
