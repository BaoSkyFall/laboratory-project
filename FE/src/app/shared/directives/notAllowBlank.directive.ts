import { FormControl } from '@angular/forms';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[notAllowBlank]'
})
export class NotAllowBlankDirective {
  @Input() value: any;
  @Output() valueChange: EventEmitter<string>;

  @HostListener('keyup') onKeyUp(value) {
    this.value instanceof FormControl ?
      this.value.setValue(this.value.value.replace(/\s/g, '')) :
      this.valueChange.emit(this.value.replace(/\s/g, ''))

  }
  constructor() {
    this.valueChange = new EventEmitter<string>()
  }


}
