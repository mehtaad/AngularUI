import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'component-inheritance-widget',
  templateUrl: './component-inheritance-widget.component.html',
  styleUrls: ['./component-inheritance-widget.component.scss']
})
export class ComponentInheritanceWidgetComponent implements IWidget {
   widgetTitle = 'Component Inheritance';

}
