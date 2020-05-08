import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceStringLength'
})
export class ReduceStringLengthPipe implements PipeTransform {

  transform(value: string, length: number): string {
    let newValue = value;
    if(value.length > length) {
      newValue = value.substr(0, length) + '...';
    }
    return newValue;
  }

}
