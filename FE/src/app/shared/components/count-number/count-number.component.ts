import {
  Component, ElementRef, EventEmitter, HostListener,
  Input, OnChanges, OnInit, Output, SimpleChanges
} from '@angular/core';
import { GlobalConfig } from '@cores/enum';
import * as _ from 'lodash';

@Component({
  selector: 'app-count-number',
  templateUrl: './count-number.component.html',
  styleUrls: ['./count-number.component.scss']
})
export class CountNumberComponent implements OnChanges, OnInit {
  @Input() value = 0;
  @Input() max = GlobalConfig.MAX_NUMBER;
  @Input() min = 0;
  @Input() type: 'basic' | 'input' = 'basic';
  @Input() placeholder: string = '';
  @Input() increaseNumber: number = 1;
  @Input() allowSign: boolean = false;
  @Input() allowDecimals: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;

  /**
   * If value is equal min or max, blur need to be emitted
   */
  @Input() changeOnBlur: boolean = true;

  /**
   * Check if value is equal min or max, hide button (-) or (+)
   */
  @Input() hideBtnOnLimit: boolean = true;
  @Input() alwayShowBtn: boolean = false;
  @Input() hideMaxOnLimit: boolean = true;
  @Input() hideMinOnLimit: boolean = true;
  @Input() redIfNegative: boolean = false;

  @Output() valueChanges = new EventEmitter<number>();
  _currentValue: number | string = 0;
  _prevValue = 0;
  isFocus = false;
  maxWidth: number | null = null;


  /**
   * Only for decimal mode
   */
  get LengthOfDecimal() {
    if (this.allowDecimals) {
      const arrSplit = this.increaseNumber.toString().split('.');
      return arrSplit[1] ? arrSplit[1].length : 0;
    }
    return 0;
  }

  get showButtonByConditionMin() {
    return ((this._currentValue <= this.min && this.hideBtnOnLimit && !this.alwayShowBtn)
      || (this._currentValue <= this.min && !this.isFocus && !this.alwayShowBtn))
      && this.hideMinOnLimit;
  }
  get showButtonByConditionMax() {
    return ((this._currentValue >= this.max && this.max !== -1 && this.hideBtnOnLimit && !this.alwayShowBtn)
      || (this._currentValue > this.max && !this.isFocus && !this.alwayShowBtn))
      && this.hideMaxOnLimit
      ;
  }

  constructor(private eRef: ElementRef) {
    if (this.value) {
      this._currentValue = +this.value;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.value = changes['value'].currentValue;

      // set current and prev value
      this._currentValue = +this.value;
      this._prevValue = +this._currentValue;

      if (this.max > GlobalConfig.MAX_NUMBER) {
        this.max = GlobalConfig.MAX_NUMBER;
      }
    }
    if (changes['disabled']) {
      this.disabled = changes['disabled'].currentValue;
    }
  }
  ngOnInit() {
    if (this.value < this.min) {
      this._currentValue = +this.min;
      this._prevValue = +this.min;
    }
  }

  /*
  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isFocus = true;
    } else {
      this.isFocus = false;
      if (this.changeOnBlur) {
        // if (this._currentValue === '' ||
        //   (this._currentValue < this.min || (this._currentValue > this.max && this.max != -1))) {
        // }
        this.checkValid(0, true);
        // this.emitValue(this._currentValue, true);
      }
    }
    event.preventDefault();
  } */

  onClick(_value: number) {
    this.isFocus = true;
    return this.checkValid(_value);
  }
  onChangeInput(type: string = 'normal', evtValue = '') {
    this.isFocus = type === 'blur' ? false : true;
    if (evtValue !== '') {
      const _value = Number(evtValue);
      this._currentValue = Number.isNaN(_value) ? this._currentValue : _value;
      this.value = +this._currentValue;
    }
    const _callImmediate = ['blur'];
    return this.checkValid(0, _callImmediate.includes(type));
  }

  checkValid(_value: any, checkOnFocusOut = false) {
    let _result = true;
    const numberOfValue = Number(this._currentValue) + _value;

    if (checkOnFocusOut && this.changeOnBlur && !this.isFocus
      && ((this.max > -1 && this._currentValue > this.max) || this._currentValue < this.min)
      && (this._currentValue === '' || this._currentValue == 0)) {
      this._currentValue = numberOfValue < this.min ? this.min : this.max;
      // this._prevValue = +this._currentValue;
      this.emitValue(Number(this._currentValue), true);
      return _result;
    }

    if (_value === 0 &&
      Number(this._currentValue) >= this.min &&
      Number(this._currentValue) <= this.max) {
      this.emitValue(Number(this._currentValue), true);
      return _result;
    }


    if (numberOfValue >= this.min &&
      (numberOfValue <= this.max || this.max === -1)) {
      if (this.allowDecimals) {
        this._currentValue = Number(numberOfValue.toFixed(this.LengthOfDecimal));
      } else {
        this._currentValue = numberOfValue;
      }
      // if not equal limit, immediate value out
      this.emitValue(this._currentValue,
        numberOfValue >= this.min && numberOfValue <= this.max || this.max === -1);
    } else {
      if (numberOfValue > this.max) {
        const _timeout = setTimeout(() => {
          if (!this.changeOnBlur || checkOnFocusOut) {
            // this._currentValue = _.parseInt((+this._currentValue / 10).toFixed(0));
            this._currentValue = +this.max < 0 ? GlobalConfig.MAX_NUMBER : +this.max;
            this.emitValue(this._currentValue, true);
          } else {
            this.emitValue(this._currentValue);
          }
          clearTimeout(_timeout);
        }, 10);
      } else {
        if (numberOfValue < this.min) {
          const _timeout = setTimeout(() => {
            if (!this.changeOnBlur || checkOnFocusOut) {
              this._currentValue = +this.min;
              this.emitValue(this._currentValue, true);
            } else {
              this.emitValue(this._currentValue);
            }
            clearTimeout(_timeout);
          }, 10);
        }
      }
      _result = false;
    }
    this.checkLengthCurrentValue()
    return _result;
  }

  emitValue(value: any, immediate = false) {
    this.value = +value;
    if (value !== this._prevValue) {
      if (immediate) {
        this._prevValue = +value;
        return this.valueChanges.emit(Number(value));
      } else if (!this.changeOnBlur) {
        this._prevValue = +value;
        return this.valueChanges.emit(Number(value));
      }
    }
  }

  checkLengthCurrentValue() {
    if (this._currentValue.toString().length < 5) {
      this.maxWidth = null;
    } else {
      // const inputLength = this._currentValue.toString().length;
      this.maxWidth = 44; // _.parseInt(`${inputLength - 1}4`)
    }
  }
}
