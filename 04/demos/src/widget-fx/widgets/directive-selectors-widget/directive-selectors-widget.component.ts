import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'directive-selectors',
  templateUrl: './directive-selectors-widget.component.html',
  styleUrls: ['./directive-selectors-widget.component.scss']
})
export class DirectiveSelectorsWidgetComponent implements IWidget {
   widgetTitle = 'Directive Selectors';

}
