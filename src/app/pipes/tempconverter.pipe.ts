import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempconverter'
})
export class TempconverterPipe implements PipeTransform {
  transform(value: any): any {
    const unitCelsius = value - 273;
    const unitFahrenheit = Math.floor(unitCelsius * (9 / 5) + 32);
    return unitFahrenheit ;
  }

}
