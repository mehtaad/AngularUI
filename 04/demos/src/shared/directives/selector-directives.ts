import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

// **********************************************
@Directive({
  selector: '.class'
})
export class ClassSelectorDirective implements OnInit {
  elm: HTMLElement;
  constructor(element: ElementRef, private ren: Renderer2) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }
  ngOnInit(): void {
    if (this.elm) {
      this.ren.setStyle(this.elm, 'color', 'blue');
    }
  }

}

// **********************************************
@Directive({
  selector: '.class1:not(".class2")'
})
export class NotClassSelectorDirective implements OnInit {
  elm: HTMLElement;
  constructor(element: ElementRef, private ren: Renderer2) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }
  ngOnInit(): void {
    if (this.elm) {
      this.ren.setStyle(this.elm, 'color', 'green');
    }
  }

}

// **********************************************
@Directive({
  selector: '.class3, [hsPaywall]'
})
export class MultiSelectorDirective implements OnInit {
  elm: HTMLElement;
  constructor(element: ElementRef, private ren: Renderer2) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }
  ngOnInit(): void {
    if (this.elm) {
      this.ren.setStyle(this.elm, 'color', 'orange');
    }
  }
}

// **********************************************
@Directive({
  selector: 'a'
})
export class ElementSelectorDirective implements OnInit {
  elm: HTMLElement;
  // This would overwrite any existing classes on the element
  //      @HostBinding('class') class = 'classFromDirective';

  constructor(element: ElementRef, private ren: Renderer2) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }
  ngOnInit(): void {
    if (this.elm) {
      this.ren.addClass(this.elm, 'classFromDirective');
    }
  }

}

// **********************************************
@Directive({
  selector: 'span[qualified]'
})
export class QualifiedElementSelectorDirective implements OnInit {
  elm: HTMLElement;

  constructor(element: ElementRef, private ren: Renderer2) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }
  ngOnInit(): void {
    if (this.elm) {
      this.ren.addClass(this.elm, 'class2FromDirective');
    }
  }

}
