import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'shadow-piercing-widget',
  templateUrl: './shadow-piercing-widget.component.html',
  styleUrls: ['./shadow-piercing-widget.component.scss']
})
export class ShadowPiercingWidgetComponent implements IWidget {
   widgetTitle = 'Shadow Piercing';

}
