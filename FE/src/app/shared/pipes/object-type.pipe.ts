import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'objectType'
})
export class ObjectTypePipe implements PipeTransform {
  constructor(private translateService: TranslateService) { }
  transform(value: any, args?: any): any {
    let result = '';
    if (value) {
      result = this.translateService.instant(`objectType.${value}` || '--') || '';
    }
    return result;
  }

}
