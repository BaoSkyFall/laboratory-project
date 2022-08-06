import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: any, args?: any): string {
    let gender: string = '';

    if (value == '0') {
      gender = 'Nam';
    } else {
      gender = 'Nữ';
    }
    return gender;
  }
}
