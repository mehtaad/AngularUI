import { Component, ElementRef, ViewChild,
  AfterViewInit, Renderer2 } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'manipulating-ui-widget',
  templateUrl: './manipulating-ui-widget.component.html',
  styleUrls: ['./manipulating-ui-widget.component.scss']
})
export class ManipulatingUIWidgetComponent implements IWidget, AfterViewInit {
  constructor(private ren: Renderer2) { }

  @ViewChild('class') class: ElementRef;
  @ViewChild('attr') attr: ElementRef;
  @ViewChild('style') style: ElementRef;
  @ViewChild('listener') listener: ElementRef;

  widgetTitle = 'Manipulating the UI';
  boundContent = 'This is <b><u>HTML</u> content</b>';
  hidden = false;
  inDom = true;

  private uiElements: {} = {};
  private contentVisible = false;
  private classOn = false;
  private attrOn = false;
  private styleOn = false;
  private listenerOn = false;
  private listenerElem: HTMLElement;
  private styleElem: HTMLElement;
  private classElem: HTMLElement;
  private attrElem: HTMLElement;
  private listenerFunc: () => void;

  ngAfterViewInit(): void {
    this.initElements();
    this.toggleContent();
  }

  toggleContent() {
    this.boundContent = this.contentVisible
      ? ''
      : 'This is <b><u>HTML</u> content</b>';
    this.contentVisible = !this.contentVisible;
  }
  flipUI() {
    this.inDom = !this.inDom;
    this.hidden = !this.hidden;
  }
  toggleClass() {
    if (this.classElem) {
      if (this.classOn) {
        this.ren.removeClass(this.classElem, 'highlight');
      } else {
        this.ren.addClass(this.classElem, 'highlight');
      }
      this.classOn = !this.classOn;
    }
  }
  toggleAttribute() {
    if (this.attrElem) {
      if (this.attrOn) {
        this.ren.removeAttribute(this.attrElem, 'disabled');
      } else {
        this.ren.setAttribute(this.attrElem, 'disabled', 'true');
      }
      this.attrOn = !this.attrOn;
    }
  }
  toggleStyle() {
    if (this.styleElem) {
      if (this.styleOn) {
        this.ren.removeStyle(this.styleElem, 'color');
      } else {
        this.ren.setStyle(this.styleElem, 'color', 'red');
      }
      this.styleOn = !this.styleOn;
    }
  }
  toggleListener() {
    if (this.listenerElem) {
      if (this.listenerOn) {
        if (this.listenerFunc) {
          this.listenerFunc();
        }
      } else {
        this.listenerFunc = this.ren.listen(this.listenerElem, 'mousemove',
          (evt) => this.listen(evt));
      }
      this.listenerOn = !this.listenerOn;
    }
  }
  listen(evt: MouseEvent) {
    if (this.listenerElem) {
      this.ren.setStyle(this.listenerElem, 'background-color', this.getRandomColor());
    }
  }
  listenerIs(): string {
    return this.listenerOn
      ? 'on'
      : 'off';
  }
  private initElements() {
    if (this.class && this.class.nativeElement) {
      this.classElem = this.class.nativeElement;
    }
    if (this.attr && this.attr.nativeElement) {
      this.attrElem = this.attr.nativeElement;
    }
    if (this.style && this.style.nativeElement) {
      this.styleElem = this.style.nativeElement;
    }
    if (this.listener && this.listener.nativeElement) {
      this.listenerElem = this.listener.nativeElement;
    }
  }
  private getRandomColor(): string {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
