import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortId',
  standalone: true
})
export class ShortIdPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(24);
  }

}
