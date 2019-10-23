import { Component, Renderer2 } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'renderer2-widget',
  templateUrl: './renderer2-widget.component.html',
  styleUrls: ['./renderer2-widget.component.scss']
})
export class Renderer2WidgetComponent implements IWidget {
  widgetTitle = 'Renderer2';

  constructor(private ren: Renderer2) { }

  addLink(evt: MouseEvent) {
    const link: HTMLAnchorElement = this.ren.createElement('a');
    link.href = 'javascript:alert("hello")';
    const txt: HTMLElement = this.ren.createText('Click Me!');
    link.appendChild(txt);
    const parent = this.ren.parentNode(evt.target);
    this.ren.appendChild(parent, link);
  }

  selectRootElement(evt: MouseEvent) {
    const root = this.ren.selectRootElement(evt.target);
    console.log(root);
  }
}
