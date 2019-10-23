import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { WidgetZoneComponent } from './widget-zone/widget-zone.component';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { AsyncLoaderWidgetComponent } from './widgets/async-loader-widget/async-loader-widget.component';
import { ImpurePipeComponent } from './widgets/impure-pipe-widget/impure-pipe.component';
import { ImpurePipe } from './widgets/impure-pipe-widget/impure.pipe';
import { TrackByWidgetComponent } from './widgets/trackby-widget/trackby-widget.component';
import { MemoizeWidgetComponent } from './widgets/memoize-widget/memoize-widget.component';
import { Hooks2Component } from './widgets/hooks2-widget-host/hooks2/hooks2.component';
import { HooksWidgetHostComponent } from './widgets/hooks-widget-host/hooks-widget-host.component';
import { Hooks2WidgetHostComponent } from './widgets/hooks2-widget-host/hooks2-widget-host.component';
import { HooksComponent } from './widgets/hooks-widget-host/hooks.component/hooks.component';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatGridListModule,

    ],
    declarations: [
        WidgetZoneComponent,
        EmptyWidgetComponent,
        AsyncLoaderWidgetComponent,
        ImpurePipeComponent,
        ImpurePipe,
        TrackByWidgetComponent,
        MemoizeWidgetComponent,
        Hooks2WidgetHostComponent,
        Hooks2Component,
        HooksWidgetHostComponent,
        HooksComponent
    ],
    entryComponents: [
        EmptyWidgetComponent,
        AsyncLoaderWidgetComponent,
        ImpurePipeComponent,
        TrackByWidgetComponent,
        MemoizeWidgetComponent,
        HooksWidgetHostComponent,
        Hooks2WidgetHostComponent,
    ],
    exports: [
        WidgetZoneComponent,
        ImpurePipe
    ],
    providers: [],
})
export class WidgetFxModule { }
