import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {

  transform(value: Array<any>, quantity: number = 4): Array<any> {
    return value.slice(0,quantity);
  }

}
