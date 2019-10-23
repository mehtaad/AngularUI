import { WidgetInfo } from './widget-info';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { SecurityWidgetComponent } from './widgets/security-widget/security-widget.component';

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
            new WidgetInfo('Bypassing Security', 'security', SecurityWidgetComponent)
        );
    }
    private setSelectableWidgets() {
        this.userSelectableWidgets = this.supportedWidgets.filter((itm) => {
            return itm.internalName !== 'about';
        });
    }
}

