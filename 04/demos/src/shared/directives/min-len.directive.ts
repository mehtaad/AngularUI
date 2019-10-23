import { Directive, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: 'input[type="password"]'
})
export class PasswordMinLenDirective {
  @HostBinding('attr.minlength') minlen = 15;
}
