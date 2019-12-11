import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkDate'
})
export class CheckDatePipe implements PipeTransform {
  previouseValue;
  // 11
  transform(value: any, ...args: any[]): any {
    return null;
  }

}
