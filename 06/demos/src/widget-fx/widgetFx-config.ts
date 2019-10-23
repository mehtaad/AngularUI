import { WidgetInfo } from './widget-info';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { SwitchBloatWidgetComponent } from './widgets/switch-bloat-widget/switch-bloat-widget.component';
import { AttributeSelectorWidgetComponent } from './widgets/attribute-selector-widget/attribute-selector-widget.component';

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
            new WidgetInfo('ngSwitch Bloat', 'switch-bloat', SwitchBloatWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Attribute Selector', 'attribute-selector', AttributeSelectorWidgetComponent)
        );
    }
    private setSelectableWidgets() {
        this.userSelectableWidgets = this.supportedWidgets.filter((itm) => {
            return itm.internalName !== 'about';
        });
    }
}

