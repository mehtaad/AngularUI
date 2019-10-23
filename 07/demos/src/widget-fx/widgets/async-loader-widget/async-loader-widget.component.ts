import { Component, AfterViewInit } from '@angular/core';
import { IWidget } from '../../IWidget';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'async-loader-widget',
  templateUrl: './async-loader-widget.component.html',
  styleUrls: ['./async-loader-widget.component.scss']
})
export class AsyncLoaderWidgetComponent implements IWidget, AfterViewInit {
  widgetTitle = 'Async Loader';

  myObservable: Observable<any>;
  ngAfterViewInit(): void {
    this.initObservable();
  }
  initObservable() {
    this.myObservable = null;
    this.myObservable = Observable.create( observer => {
      setTimeout( () => {
        observer.next({'id' : 123});
      }, 2000);
    });
  }

}
