import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { WidgetZoneComponent } from './widget-zone/widget-zone.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { ViewEncapsulationWidgetComponent } from './widgets/view-encapsulation-widget/view-encapsulation-widget.component';
import { ViewEncapsulationChild1Component } from './widgets/view-encapsulation-widget/view-encapsulation-child1/view-encapsulation-child1.component';
import { ViewEncapsulationChild2Component } from './widgets/view-encapsulation-widget/view-encapsulation-child2/view-encapsulation-child2.component';
import { ShadowPiercingWidgetComponent } from './widgets/shadow-piercing-widget/shadow-piercing-widget.component';
import { ShadowPiercingChild1aComponent } from './widgets/shadow-piercing-widget/shadow-piercing-child1a/shadow-piercing-child1a.component';
import { ShadowPiercingChild1eComponent } from './widgets/shadow-piercing-widget/shadow-piercing-child1e/shadow-piercing-child1e.component';
import { ShadowPiercingChild1dComponent } from './widgets/shadow-piercing-widget/shadow-piercing-child1d/shadow-piercing-child1d.component';
import { ShadowPiercingChild1cComponent } from './widgets/shadow-piercing-widget/shadow-piercing-child1c/shadow-piercing-child1c.component';
import { ShadowPiercingChild1bComponent } from './widgets/shadow-piercing-widget/shadow-piercing-child1b/shadow-piercing-child1b.component';
import { DynamicCaseWidgetComponent } from './widgets/dynamic-case-widget/dynamic-case-widget.component';
import { DynamicCasePipe } from '../app/dynamic-case.pipe';
import { UserConfigService } from '../app/user-config.service';
import { DirectiveSelectorsWidgetComponent } from './widgets/directive-selectors-widget/directive-selectors-widget.component';
import { SharedModule } from '../shared/shared.module';
import { HostBindingWidgetComponent } from './widgets/host-binding-widget/host-binding-widget.component';
import { HostListenerWidgetComponent } from './widgets/host-listener-widget/host-listener-widget.component';
import { Renderer2WidgetComponent } from './widgets/renderer2-widget/renderer2-widget.component';
import { ManipulatingUIWidgetComponent } from './widgets/manipulating-ui-widget/manipulating-ui-widget.component';
import { ViewEncapsulation2WidgetComponent } from './widgets/view-encapsulation2-widget/view-encapsulation2-widget.component';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatGridListModule,

        SharedModule
    ],
    declarations: [
        WidgetZoneComponent,
        EmptyWidgetComponent,
        ViewEncapsulationWidgetComponent,
        ViewEncapsulation2WidgetComponent,
        ViewEncapsulationChild1Component,
        ViewEncapsulationChild2Component,
        ShadowPiercingWidgetComponent,
        ShadowPiercingChild1aComponent,
        ShadowPiercingChild1bComponent,
        ShadowPiercingChild1cComponent,
        ShadowPiercingChild1dComponent,
        ShadowPiercingChild1eComponent,
        DynamicCaseWidgetComponent,
        DynamicCasePipe,
        DirectiveSelectorsWidgetComponent,
        HostBindingWidgetComponent,
        HostListenerWidgetComponent,
        Renderer2WidgetComponent,
        ManipulatingUIWidgetComponent
    ],
    entryComponents: [
        EmptyWidgetComponent,
        ViewEncapsulationWidgetComponent,
        ViewEncapsulation2WidgetComponent,
        ShadowPiercingWidgetComponent,
        DynamicCaseWidgetComponent,
        DirectiveSelectorsWidgetComponent,
        HostBindingWidgetComponent,
        HostListenerWidgetComponent,
        Renderer2WidgetComponent,
        ManipulatingUIWidgetComponent
    ],
    exports: [
        WidgetZoneComponent,
        DynamicCasePipe
    ],
    providers: [UserConfigService],
})
export class WidgetFxModule { }
