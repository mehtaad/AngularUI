import { WidgetInfo } from './widget-info';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { ViewEncapsulationWidgetComponent } from './widgets/view-encapsulation-widget/view-encapsulation-widget.component';
import { ViewEncapsulation2WidgetComponent } from './widgets/view-encapsulation2-widget/view-encapsulation2-widget.component';
import { ShadowPiercingWidgetComponent } from './widgets/shadow-piercing-widget/shadow-piercing-widget.component';
import { DynamicCaseWidgetComponent } from './widgets/dynamic-case-widget/dynamic-case-widget.component';
import { DirectiveSelectorsWidgetComponent } from './widgets/directive-selectors-widget/directive-selectors-widget.component';
import { HostBindingWidgetComponent } from './widgets/host-binding-widget/host-binding-widget.component';
import { HostListenerWidgetComponent } from './widgets/host-listener-widget/host-listener-widget.component';
import { Renderer2WidgetComponent } from './widgets/renderer2-widget/renderer2-widget.component';
import { ManipulatingUIWidgetComponent } from './widgets/manipulating-ui-widget/manipulating-ui-widget.component';

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
            new WidgetInfo('View Encapsulation', 'view-encapsulation', ViewEncapsulationWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('View Encapsulation 2', 'view-encapsulation2', ViewEncapsulation2WidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Shadow Piercing', 'shadow-piercing', ShadowPiercingWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Dynamic Case', 'dynamic-case', DynamicCaseWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Directive Selectors', 'directive-selectors', DirectiveSelectorsWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Host Binding', 'host-binding', HostBindingWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Host Listener', 'host-listener', HostListenerWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Renderer2', 'renderer2', Renderer2WidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Manipulating the UI', 'manipulating-ui', ManipulatingUIWidgetComponent)
        );
    }
    private setSelectableWidgets() {
        this.userSelectableWidgets = this.supportedWidgets.filter((itm) => {
            return itm.internalName !== 'about';
        });
    }
}

