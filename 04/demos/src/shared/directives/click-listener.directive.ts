import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[hsClickListener]'
})
export class ClickListenerDirective {
  elm: HTMLElement;
  @Input() listener: (evt: MouseEvent) => {};

  @HostListener('click', ['$event'])
  onClicked(evt: MouseEvent) {
    if (this.listener) {
      this.listener(evt);
    }
  }
}
