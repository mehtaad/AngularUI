import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'view-encapsulation-widget',
  templateUrl: './view-encapsulation-widget.component.html',
  styleUrls: ['./view-encapsulation-widget.component.scss']
})
export class ViewEncapsulationWidgetComponent implements IWidget {
   widgetTitle = 'View Encapsulation';

}
