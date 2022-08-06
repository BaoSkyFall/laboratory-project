import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalName',
})
export class NamePipe implements PipeTransform {
  transform(value: string, args?: any): string {
     if (!value) return value;
  return value.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

  }
}
