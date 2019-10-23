import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';


@Component({
  selector: 'hooks-widget-host',
  templateUrl: './hooks-widget-host.component.html',
  styleUrls: ['./hooks-widget-host.component.scss']
})
export class HooksWidgetHostComponent implements IWidget {
  widgetTitle = 'Lifecycle Hooks';
  val = 0;
  changeBoundValue() {
    console.log('Changing bound value from parent component');
    this.val++;
  }
}


