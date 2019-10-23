import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'ng-template-outlet-context',
  templateUrl: './ng-template-outlet-context.component.html',
  styleUrls: ['./ng-template-outlet-context.component.scss']
})
export class NgTemplateOutletContextWidgetComponent implements IWidget {
  widgetTitle = 'NgTemplateOutletContext';
  condition = true;
  context1 = {
      $implicit: 'dynamic content (when condition is true)',
      details: `The context is delivered dynamically based upon a condition.
                It could include content retrieved from a server or in some
                way manipualted programmatically before being presented.`
  };
  context2 = {
    $implicit: 'dynamic content (when condition is false)',
    details: `Notice the use of $implicit instead of 'contentType' for the
              default variable (let-contentType instead of
              let-contentType='contentType').`
};
  getTemplateContext(): {} {
    return this.condition
      ? this.context1
      : this.context2;
  }
  toggleCondition() {
    this.condition = !this.condition;
  }
}
