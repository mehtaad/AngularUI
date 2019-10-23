import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'ngIf-else-widget',
  templateUrl: './ngIf-else-widget.component.html',
  styleUrls: ['./ngIf-else-widget.component.scss']
})
export class NgIfElseWidgetComponent implements IWidget {
   widgetTitle = 'ngIf-Else';
   isEnabled = true;

   toggle() {
     this.isEnabled = !this.isEnabled;
   }
}
