import {
    Component, Input, Type, ViewChild, ViewEncapsulation, ViewContainerRef
} from '@angular/core';

import { IWidget } from '../IWidget';

import { EmptyWidgetComponent } from '../widgets/empty-widget/empty-widget.component';
import { WidgetInfo } from '../widget-info-co';
import { WidgetTypes } from '../widget-types.enum';
import { EnumUtils } from '../enum-utils';
import { ComponentInheritanceWidgetComponent } from '../widgets/component-inheritance-widget/component-inheritance-widget.component';
import { NgTemplateOutletContextWidgetComponent } from '../widgets/ng-template-outlet-context/ng-template-outlet-context.component';
import { NgIfElseWidgetComponent } from '../widgets/ngIf-else/ngIf-else-widget.component';
import { ContentProjectionWidgetComponent } from '../widgets/content-projection-widget/content-projection-widget.component';

@Component({
    selector: 'widget-zone-co',
    templateUrl: './widget-zone-co.component.html',
    styleUrls: ['./widget-zone-co.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WidgetZoneComponentOutletComponent {

    private defaultWidget: Type<IWidget>;
    @Input() height: any = 'calc(100% - 8px)';
    @Input() width: any = 'calc(100% - 8px)';

    activeWidgetTitle: string;
    activeWidget: Type<IWidget>;

    public ChangeWidgetType(newType: WidgetInfo) {
        this.activeWidget = this.getWidgetType(newType);
        this.activeWidgetTitle = newType.displayName;
    }


    public customTrackBy(index: number, obj: any): any {
        return index;
    }

    GetAvailableWidgetTypes(): WidgetInfo[] {
        const rv: WidgetInfo[] = [];
        EnumUtils.getNamesAndValues(WidgetTypes).forEach((val) => {
            const widgetName = this.getWidgetTitle(val.value);
            if ('About' !== widgetName) {
                rv.push(
                    {
                        'displayName': widgetName,
                        'widgetType': val.value
                    }
                );
            }
        });
        return rv;
    }
    private getWidgetTitle(widgetType: WidgetTypes): string {
        switch (widgetType) {
            case WidgetTypes.ContentProjection:
                return 'Content Projection';
            case WidgetTypes.NgIfElse:
                return 'NgIfElse';
            case WidgetTypes.NgTemplateOutletContext:
                return 'NgTemplateOutletContext';
            case WidgetTypes.ComponentInheritance:
                return 'Component Inheritance';
            default:
                return 'None';
        }
    }
    private getWidgetType(newType: WidgetInfo): Type<IWidget> {
        switch (newType.widgetType) {
            case WidgetTypes.ContentProjection:
                return ContentProjectionWidgetComponent;
            case WidgetTypes.NgIfElse:
                return NgIfElseWidgetComponent;
            case WidgetTypes.NgTemplateOutletContext:
                return NgTemplateOutletContextWidgetComponent;
            case WidgetTypes.ComponentInheritance:
                return ComponentInheritanceWidgetComponent;
            default:
                return EmptyWidgetComponent;
        }
    }

}

