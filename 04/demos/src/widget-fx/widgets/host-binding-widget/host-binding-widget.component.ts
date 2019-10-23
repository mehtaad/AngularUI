import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'host-binding-widget',
  templateUrl: './host-binding-widget.component.html',
  styleUrls: ['./host-binding-widget.component.scss']
})
export class HostBindingWidgetComponent implements IWidget {
  widgetTitle = 'Host Binding';
  active = false;

  toggleActive() {
    this.active = !this.active;
  }
}
