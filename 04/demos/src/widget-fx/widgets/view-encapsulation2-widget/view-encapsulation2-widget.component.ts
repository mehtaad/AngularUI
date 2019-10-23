import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'view-encapsulation2-widget',
  templateUrl: './view-encapsulation2-widget.component.html',
  styleUrls: ['./view-encapsulation2-widget.component.scss']
})
export class ViewEncapsulation2WidgetComponent implements IWidget {
   widgetTitle = 'View Encapsulation 2';

}
