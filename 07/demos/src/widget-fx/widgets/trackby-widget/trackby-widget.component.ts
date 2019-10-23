import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'track-by',
  templateUrl: './trackby-widget.component.html',
  styleUrls: ['./trackby-widget.component.scss']
})
export class TrackByWidgetComponent implements IWidget {
   widgetTitle = 'Track By';
   list: any[] = [
     {name: 'one', id: 1},
     {name: 'two', id: 2},
     {name: 'three', id: 3},
     {name: 'four', id: 4},
     {name: 'five', id: 5}
    ];

   updateList() {
     this.list = [
       {name: 'one', id: 1},
       {name: 'three', id: 3},
       {name: 'five', id: 5},
       {name: 'seven', id: 7},
       {name: 'nine', id: 9}];
   }

   trackByFunc(idx: number, itm: any) {
     return itm.id;
   }
}
