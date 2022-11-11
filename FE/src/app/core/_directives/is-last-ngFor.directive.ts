import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[isLastNgFor]'
})
export class IsLastNgForDirective implements OnInit {
  @Input() isLast: boolean = false;
  @Output() lastDone: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    if (this.isLast) {
      this.lastDone.emit(true);
    }
  }
}
