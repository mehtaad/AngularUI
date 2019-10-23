import { Directive, HostBinding, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[hsCheckActive]'
})
export class CheckActiveDirective {
  private isActive_: boolean;

  @Input()
  @HostBinding('class.isActive')
  set isActive(val: boolean) {
    if (Math.floor((Math.random() * 10) + 1) > 5) {
      this.isActive_ = true;
    } else {
      this.isActive_ = false;
    }
  }
  get isActive(): boolean {
    return this.isActive_;
  }

}
