import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'impure-pipe',
  templateUrl: './impure-pipe.component.html',
  styleUrls: ['./impure-pipe.component.scss']
})
export class ImpurePipeComponent implements IWidget {
  widgetTitle = 'Impure Pipe';

  mousemove() {
    // nothing to do, just need the event to fire for this little demo...
  }
}
