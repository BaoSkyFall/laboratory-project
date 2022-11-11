import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeNameJoin'
})
export class CodeNameJoinPipe implements PipeTransform {

  transform(value: string, args?: any[], letterJoin = '-'): any {
    const _argsValid = args ? args.filter(t => t !== null && t !== undefined && t !== '').length > 0 : false;
    if (args && _argsValid) {
      return `${value} ${value ? letterJoin : ''} ${args.join(` ${letterJoin} `)}`;
    }
    return `${value ?? ''}`;
  }

}
