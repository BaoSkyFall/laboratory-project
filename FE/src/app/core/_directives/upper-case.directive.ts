import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Helpers } from '@cores/_helpers';
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[UpperCase]',
  // host: {
  //   // '(input)': 'toUpperCase()',
  //   // '(blur)': 'toUpperCase()',
  // }
})
export class UpperCaseTextDirective {
  @Input('UpperCase') allowUpperCase: boolean = true;

  constructor(private ref: ElementRef,
    private readonly control: NgControl) {
  }
  @HostListener('input')
  oInputDirective() {
    this.toUpperCase()
  }
  @HostListener('blur')
  oBlurDirective() {
    if (!Helpers.isSafari()) this.toUpperCase()
  }


  toUpperCase() {
    if (this.allowUpperCase) {
      try {
        const selectionStart = this.ref.nativeElement.selectionStart;
        this.ref.nativeElement.value = this.ref.nativeElement.value.toUpperCase();
        this.ref.nativeElement.setSelectionRange(selectionStart, selectionStart)

        if (this.control && this.control.control) {
          this.control.control.setValue(this.ref.nativeElement.value.toUpperCase());
          this.control.control.updateValueAndValidity()
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}

