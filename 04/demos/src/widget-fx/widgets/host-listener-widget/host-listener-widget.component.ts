import { Component, HostListener } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'host-listener-widget',
  templateUrl: './host-listener-widget.component.html',
  styleUrls: ['./host-listener-widget.component.scss']
})
export class HostListenerWidgetComponent implements IWidget {
  widgetTitle = 'Host Listener';

  @HostListener('document:click', ['$event'])
  onDocumentClicked(evt) {
    console.log('click via document!', evt);
  }

  handleClick(evt: MouseEvent) {
    console.log('click via Directive!', evt);
    evt.cancelBubble = true;
  }

}
