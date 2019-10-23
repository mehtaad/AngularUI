import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'content-projection-widget',
  templateUrl: './content-projection-widget.component.html',
  styleUrls: ['./content-projection-widget.component.scss']
})
export class ContentProjectionWidgetComponent implements IWidget {
   widgetTitle = 'Content Projection';

}
