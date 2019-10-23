
import { IWidget } from './IWidget';
import { Type } from '@angular/core';
import { WidgetTypes } from './widget-types.enum';


export class WidgetInfo {
    displayName: string;
    widgetType: WidgetTypes;

    constructor(displayName: string, widgetType: WidgetTypes) {
        this.displayName = displayName;
        this.widgetType = widgetType;
    }
}

