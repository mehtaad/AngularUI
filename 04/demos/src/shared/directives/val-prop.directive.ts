import { Directive, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[hsValProp]'
})
export class ValPropDirective implements AfterViewInit {

  @HostBinding('value') val = 'initial value';



ngAfterViewInit(): void {
  setTimeout( () => {
    this.val = 'set from Directive!';
  }, 5000);

}

}
