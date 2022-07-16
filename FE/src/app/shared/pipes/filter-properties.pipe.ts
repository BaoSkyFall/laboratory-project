import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter-properties'
})
export class FilterPropertiesPipe implements PipeTransform {

  transform(items: any[], properties: any, searchText: string): any[] {
    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!searchText) { return items; }

    // convert the searchText to lower case
    searchText = searchText.toLowerCase();

    // return the filtered array
    return items.filter(item => {
      const arrProperties = properties.split(', ');
      let itemFound: boolean;
      for (let i = 0; i < arrProperties.length; i++) {
        if (item[arrProperties[i]] && item[arrProperties[i]].toLowerCase().indexOf(searchText) !== -1) {
          itemFound = true;
          break;
        }
      }
      return itemFound;
    }) || [];
  }

}
