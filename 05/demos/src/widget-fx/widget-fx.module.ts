import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { WidgetZoneComponent } from './widget-zone/widget-zone.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { ContentProjectionWidgetComponent } from './widgets/content-projection-widget/content-projection-widget.component';
import { ContentProjectionChildComponent } from './widgets/content-projection-widget/content-projection-child/content-projection-child.component';
import { NgIfElseWidgetComponent } from './widgets/ngIf-else/ngIf-else-widget.component';
import { NgTemplateOutletContextWidgetComponent } from './widgets/ng-template-outlet-context/ng-template-outlet-context.component';
import { ComponentInheritanceWidgetComponent } from './widgets/component-inheritance-widget/component-inheritance-widget.component';
import { BaseComponent } from './widgets/component-inheritance-widget/base-component/base.component';
import { InheritedChild1Component } from './widgets/component-inheritance-widget/inherited-child1-component/inherited-child1.component';
import { InheritedChild2Component } from './widgets/component-inheritance-widget/inherited-child2-component/inherited-child2.component';
import { ComponentInheritanceService } from './component-inheritance.service';
import { WidgetZoneComponentOutletComponent } from './widget-zone-co/widget-zone-co.component';



@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatGridListModule,

    ],
    declarations: [
        WidgetZoneComponent,
        WidgetZoneComponentOutletComponent,
        EmptyWidgetComponent,
        ContentProjectionWidgetComponent,
        ContentProjectionChildComponent,
        NgIfElseWidgetComponent,
        NgTemplateOutletContextWidgetComponent,
        ComponentInheritanceWidgetComponent,
        BaseComponent,
        InheritedChild1Component,
        InheritedChild2Component
    ],
    entryComponents: [
        EmptyWidgetComponent,
        ContentProjectionWidgetComponent,
        ContentProjectionChildComponent,
        NgIfElseWidgetComponent,
        NgTemplateOutletContextWidgetComponent,
        ComponentInheritanceWidgetComponent
    ],
    exports: [
        WidgetZoneComponent,
        WidgetZoneComponentOutletComponent
    ],
    providers: [ComponentInheritanceService],
})
export class WidgetFxModule { }
