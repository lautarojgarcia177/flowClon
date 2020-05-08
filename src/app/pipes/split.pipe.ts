import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: string | string[], replacestr: string = ' ,'): string {
    let aux;
    if (typeof(value) === 'string') {
      aux = value.split(' ');
    } else {
      aux = value;
    }    
    let newString = '';
      aux.forEach(v => newString += v + replacestr);
      return newString.slice(0, -2);
  }

}
