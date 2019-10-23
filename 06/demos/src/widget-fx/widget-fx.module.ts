import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { WidgetZoneComponent } from './widget-zone/widget-zone.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { SwitchBloatWidgetComponent } from './widgets/switch-bloat-widget/switch-bloat-widget.component';
import { AttributeSelectorWidgetComponent } from './widgets/attribute-selector-widget/attribute-selector-widget.component';
import { AttributeSelectorChildComponent } from './widgets/attribute-selector-widget/attribute-selector-child/attribute-selector-child.component';



@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatGridListModule,

    ],
    declarations: [
        WidgetZoneComponent,
        EmptyWidgetComponent,
        SwitchBloatWidgetComponent,
        AttributeSelectorWidgetComponent,
        AttributeSelectorChildComponent
    ],
    entryComponents: [
        EmptyWidgetComponent,
        SwitchBloatWidgetComponent,
        AttributeSelectorWidgetComponent
    ],
    exports: [
        WidgetZoneComponent,
    ],
    providers: [],
})
export class WidgetFxModule { }
