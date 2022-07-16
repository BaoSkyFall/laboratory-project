import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'typeOfCard'
})
export class TypeOfCardPipe implements PipeTransform {
  constructor(private translateService: TranslateService) { }
  transform(value: any, args?: any): any {
    if(value){
      return this.translateService.instant(`typeOfCard.${value}` || '--') || '--';
    }
    return '';
  }

}
