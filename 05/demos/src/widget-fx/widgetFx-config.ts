// Not used for ngComponentOutlet

import { WidgetInfo } from './widget-info';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { ContentProjectionWidgetComponent } from './widgets/content-projection-widget/content-projection-widget.component';
import { NgIfElseWidgetComponent } from './widgets/ngIf-else/ngIf-else-widget.component';
import { NgTemplateOutletContextWidgetComponent } from './widgets/ng-template-outlet-context/ng-template-outlet-context.component';
import { ComponentInheritanceWidgetComponent } from './widgets/component-inheritance-widget/component-inheritance-widget.component';

export class WidgetFxConfig {
    private supportedWidgets: WidgetInfo[] = [];
    userSelectableWidgets: WidgetInfo[] = [];

    constructor() {
        this.setSupportedWidgets();
        this.setSelectableWidgets();
    }

    private setSupportedWidgets() {
        this.supportedWidgets.push(
            new WidgetInfo('None', 'empty', EmptyWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Content Projection', 'content-projection', ContentProjectionWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('ngIf-else', 'ngIf-else', NgIfElseWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('NgTemplateOutletContext', 'ng-template-outlet-context', NgTemplateOutletContextWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Component Inheritance', 'component-inheritance', ComponentInheritanceWidgetComponent)
        );
    }
    private setSelectableWidgets() {
        this.userSelectableWidgets = this.supportedWidgets.filter((itm) => {
            return itm.internalName !== 'about';
        });
    }
}

