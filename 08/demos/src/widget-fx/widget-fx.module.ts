import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { WidgetZoneComponent } from './widget-zone/widget-zone.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { SecurityWidgetComponent } from './widgets/security-widget/security-widget.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        MatMenuModule,
        MatGridListModule,

    ],
    declarations: [
        WidgetZoneComponent,
        EmptyWidgetComponent,
        SecurityWidgetComponent
    ],
    entryComponents: [
        EmptyWidgetComponent,
        SecurityWidgetComponent
    ],
    exports: [
        WidgetZoneComponent,
    ],
    providers: [],
})
export class WidgetFxModule { }
