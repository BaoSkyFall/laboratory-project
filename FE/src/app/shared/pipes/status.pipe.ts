// import { IStatusApp, STATUSES_APP } from '@config/status';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { IStatusApp, STATUSES_APP } from 'src/app/configs';

@Pipe({
  name: 'appStatusLabel'
})
export class StatusLabelPipe implements PipeTransform {
  statuses = STATUSES_APP;
  constructor(
    private _sanitizer: DomSanitizer,
    private _translate: TranslateService
  ) { }

  get statusesList() {
    return this.statuses
  }


  getItem(_code: string): IStatusApp | undefined {
    return this.statuses.find((t: any) =>
      t.code.toString().toLowerCase() === _code.toString().toLowerCase()
      || t.id === +_code);
  }

  getValueOnly(_code: string): string {
    const _item = this.getItem(_code);
    return _item ? this._translate.instant(_item.text) : "";
  }


  getFillValueOnly(_code: string): string {
    const _item = this.getItem(_code);
    return _item ? _item.fill : "000";
  }


  transform(code: any, returnTextOnly?: boolean, args?: any): any {
    if (!code) return returnTextOnly ? `` : this._sanitizer.bypassSecurityTrustHtml(``);
    const _forceShowOutline = args && args['forceShowOutline'] || false

    if (args && args['specials'] && _.isArray(args['specials'])) {
      this.statuses.forEach((item: any) => {
        const _existIdx = args['specials'].findIndex((ispec: any) => ispec.code === item.code);
        if (_existIdx > -1) {
          item.text = args['specials'][_existIdx].text
        }
      })
    }

    let _html = ``;
    const _status = this.getItem(code);
    if (!_status) {
      return returnTextOnly
        ? _html
        : this._sanitizer.bypassSecurityTrustHtml(_html);
    }

    if (_forceShowOutline) {
      _status.css_style = "stroke";
      _status.class = ""
    }

    _html = `<span style="--currColor: #${_status.fill}"
    class="pen-status pen-status-${_status.css_style} ${_status.class}">
      ${this._translate.instant(_status.text)}
    </span>`;

    return returnTextOnly
      ? _html
      : this._sanitizer.bypassSecurityTrustHtml(_html);
  }
}
