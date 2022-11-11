import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { StatusLabelPipe } from '@shared/pipes/status.pipe';
import { IStatusApp } from 'src/app/configs';

@Directive({
  selector: '[appStatusTooltip]'
})

export class StatusTooltipDirective implements OnChanges {
  @Input() status!: string;
  @Input() specials?: IStatusApp[];
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private statusLabelPipe: StatusLabelPipe
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.innerHTML =
      this.statusLabelPipe.transform(this.status, false,
        { forceShowOutline: true, specials: this.specials || undefined }).changingThisBreaksApplicationSecurity
  }
}
