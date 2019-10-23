import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'attribute-selector-widget',
  templateUrl: './attribute-selector-widget.component.html',
  styleUrls: ['./attribute-selector-widget.component.scss']
})
export class AttributeSelectorWidgetComponent implements IWidget {
   widgetTitle = 'Attribute Selector';

}
