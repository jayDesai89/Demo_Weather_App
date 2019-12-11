import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempconverter'
})
export class TempconverterPipe implements PipeTransform {
  // value = temp
  //
  transform(value: any): any {
    // const celsius = tempVal - 273;
    // Check if value is celsius
    const unitCelsius = value - 273;
    const unitFahrenheit = Math.floor(unitCelsius * (9 / 5) + 32);
    return unitFahrenheit;
  }

}
