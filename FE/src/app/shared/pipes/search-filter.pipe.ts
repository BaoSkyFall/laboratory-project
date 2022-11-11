import { filter } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    if (!value) return null;
    if (!args) return value;

    Object.entries(args).forEach(([key, valueObj], index) => {
      if (valueObj) {
        value = value.filter((item: any) => item[key] == valueObj) || value || [];
      }
    });
    return value;

  }
}
