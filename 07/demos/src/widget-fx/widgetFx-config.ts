import { WidgetInfo } from './widget-info';
import { EmptyWidgetComponent } from './widgets/empty-widget/empty-widget.component';
import { AsyncLoaderWidgetComponent } from './widgets/async-loader-widget/async-loader-widget.component';
import { ImpurePipeComponent } from './widgets/impure-pipe-widget/impure-pipe.component';
import { TrackByWidgetComponent } from './widgets/trackby-widget/trackby-widget.component';
import { MemoizeWidgetComponent } from './widgets/memoize-widget/memoize-widget.component';
import { HooksWidgetHostComponent } from './widgets/hooks-widget-host/hooks-widget-host.component';
import { Hooks2WidgetHostComponent } from './widgets/hooks2-widget-host/hooks2-widget-host.component';

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
            new WidgetInfo('Async Loader', 'async-loader', AsyncLoaderWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Impure Pipe', 'impure-pipe', ImpurePipeComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Track By', 'track-by', TrackByWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Memoize', 'memoize', MemoizeWidgetComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Hooks', 'hooks', HooksWidgetHostComponent)
        );
        this.supportedWidgets.push(
            new WidgetInfo('Hooks2', 'hooks2', Hooks2WidgetHostComponent)
        );
    }
    private setSelectableWidgets() {
        this.userSelectableWidgets = this.supportedWidgets.filter((itm) => {
            return itm.internalName !== 'about';
        });
    }
}

