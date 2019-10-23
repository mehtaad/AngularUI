import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { WidgetZoneComponent } from './widget-zone/widget-zone.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { DynamicFormWidgetComponent } from './widgets/dynamic-form-widget.component/dynamic-form-widget.component';
import { DynamicFormModule } from '../dynamic-forms/dynamic-forms.module';



@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatGridListModule,

        DynamicFormModule,
    ],
    declarations: [
        WidgetZoneComponent,
        EmptyWidgetComponent,
        DynamicFormWidgetComponent
    ],
    entryComponents: [
        EmptyWidgetComponent,
        DynamicFormWidgetComponent
    ],
    exports: [
        WidgetZoneComponent,
    ],
    providers: [],
})
export class WidgetFxModule { }
