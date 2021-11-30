import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylowercase'
})
export class MylowercasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
     console.log(value)
    return value.toLowerCase();
  }

}
