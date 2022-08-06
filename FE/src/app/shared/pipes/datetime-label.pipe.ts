import { Pipe, PipeTransform } from '@angular/core';
// import { AppConfigService } from '@shares/_services';
import * as _ from 'lodash';
import * as moment from 'moment';

@Pipe({
  name: 'dateTimeLabel'
})
export class DateTimeLabelPipe implements PipeTransform {
  constructor(
    // private appConfig: AppConfigService
  ) { }

  getDefaultFormat() {
    // const _config = this.appConfig.getConfigByCountryCode(this.appConfig.currentLang);
    // return _config && _config['format']
    //   ? _config.format['dateTime']
    //   : `DD/MM/YYYY HH:mm:ss`;
    return `DD/MM/YYYY HH:mm:ss`
  }
  transform(value: any, format?: string, utc: boolean = false, isUnix: boolean = true, allowZeroValue: boolean = false, args?: any): any {
    const _format = format && !_.isEmpty(format) ? format : this.getDefaultFormat(); // default format

    if (allowZeroValue && (value < 10000 || !value
      || (!_.isUndefined(value) && `${value}`.length < 9))) {
      if (value && `${value}`.length < 9) {
        return moment(value / 1000).format(_format)
      }
      return moment(0).format(_format)
    } else {
      if (!value) return ``;
    }

    value = _.isNumber(value) ? _.parseInt(value.toString()) : value;

    const _value = _.isNumber(value) && value.toString().length > 10 ? value / 1000 : value;

    let _m = utc ? moment.unix(_value).utc() : moment.unix(_value) as moment.Moment;

    if (!isUnix) {
      _m = utc ? moment(_value).utc() : moment(_value) as moment.Moment;
    }

    return _m.isValid() ? _m.format(_format) : ``;
  }

}
