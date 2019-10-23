import { Component, AfterViewInit } from '@angular/core';
import { IWidget } from '../../IWidget';
import { Memoize } from './decorator';   // <-- our custom decorator
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'memoize-widget',
  templateUrl: './memoize-widget.component.html',
  styleUrls: ['./memoize-widget.component.scss']
})
export class MemoizeWidgetComponent implements IWidget, AfterViewInit {

  widgetTitle = 'Memoize';
  serverValue = '';
  ngAfterViewInit(): void {
    this.getValue();
  }
  @Memoize(5)
  public getValue() {
    this.getFromServer()
      .subscribe(
      (val) => { this.serverValue = val; }
    );
  }

  getFromServer(): Observable<string> {
    return Observable.create(observer => {
      setTimeout(() => {
        const newVal = 'value-' + (Math.floor(Math.random() * 100) + 1);
        console.log('getting value from server...' + newVal);
        observer.next(newVal);
      }, 100);
    });
  }
}
