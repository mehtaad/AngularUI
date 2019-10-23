import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';


@Component({
  selector: 'hooks2-widget-host',
  templateUrl: './hooks2-widget-host.component.html',
  styleUrls: ['./hooks2-widget-host.component.scss']
})
export class Hooks2WidgetHostComponent implements IWidget {
  widgetTitle = 'Lifecycle Hooks 2';
  counter = 0;
  primitive = 'Initial value from parent declaration';
  obj: {'prop1': string, 'prop2': number} = {
    'prop1': 'initial value from parent - ' + this.counter + '',
    'prop2': this.counter
  };
  changeBoundPrimitive() {
    this.primitive = 'Value changed in parent - ' + this.counter++;
  }
  changeBoundObjProp() {
    this.obj.prop1 = 'Prop1 changed in parent - ' + this.counter++;
  }
  changeBoundObjRef() {
    this.obj = {
      'prop1': 'Ref changed in parent - ' + this.counter++,
      'prop2': this.counter};
  }
}


