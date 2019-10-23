import {
  AfterContentInit, OnChanges,
  AfterViewInit, OnInit, DoCheck, AfterViewChecked,
  Component, SimpleChanges, Input, ViewContainerRef, ViewChild,
  TemplateRef, EventEmitter, Output, ElementRef, ContentChild, Renderer2,
  RendererStyleFlags2, AfterContentChecked, OnDestroy
} from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'hooks2',
  templateUrl: './hooks2.component.html',
  styleUrls: ['./hooks2.component.scss']
})
export class Hooks2Component implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() boundPrimitive = 'initial value from child declaration';
  @Input() boundObj: { 'prop1': string, 'prop2': number } = {
    'prop1': 'initial value from child declaration',
    'prop2': -1
  };
  @Output() changeBoundObjProp = new EventEmitter();
  @Output() changeBoundObjRef = new EventEmitter();
  @Output() changeBoundPrimitive = new EventEmitter();
  @ViewChild('elm') vc: ElementRef;
  @ContentChild('contentChild') cc: ElementRef;
  @ViewChild('hookIndicator') hookIndicator: ElementRef;
  @ViewChild('cellCtor') cellCtor: ElementRef;
  @ViewChild('cellNgOnChanges') cellNgOnChanges: ElementRef;
  @ViewChild('cellNgOnInit') cellNgOnInit: ElementRef;
  @ViewChild('cellNgDoCheck') cellNgDoCheck: ElementRef;
  @ViewChild('cellNgAfterContentInit') cellNgAfterContentInit: ElementRef;
  @ViewChild('cellNgAfterContentChecked') cellNgAfterContentChecked: ElementRef;
  @ViewChild('cellNgAfterViewInit') cellNgAfterViewInit: ElementRef;
  @ViewChild('cellNgAfterViewChecked') cellNgAfterViewChecked: ElementRef;

  hookNames: string[] = [
    'Ctor', 'NgOnChanges', 'NgOnInit', 'NgDoCheck',
    'NgAfterContentInit', 'NgAfterContentChecked',
    'NgAfterViewInit', 'NgAfterViewChecked', 'NgOnDestroy'];
  boundValues: {
    safeCtorVals: SafeHtml,
    safeNgOnChangesVals: SafeHtml,
    safeNgOnInitVals: SafeHtml,
    safeNgDoCheckVals: SafeHtml,
    safeNgAfterContentInitVals: SafeHtml,
    safeNgAfterContentCheckedVals: SafeHtml,
    safeNgAfterViewInitVals: SafeHtml,
    safeNgAfterViewCheckedVals: SafeHtml
  } = {
      safeCtorVals: this.san.bypassSecurityTrustHtml(''),
      safeNgOnChangesVals: this.san.bypassSecurityTrustHtml(''),
      safeNgOnInitVals: this.san.bypassSecurityTrustHtml(''),
      safeNgDoCheckVals: this.san.bypassSecurityTrustHtml(''),
      safeNgAfterContentInitVals: this.san.bypassSecurityTrustHtml(''),
      safeNgAfterContentCheckedVals: this.san.bypassSecurityTrustHtml(''),
      safeNgAfterViewInitVals: this.san.bypassSecurityTrustHtml(''),
      safeNgAfterViewCheckedVals: this.san.bypassSecurityTrustHtml('')
    };
  localPrimitive = 'initial value';
  counter = 0;
  prevValues: { bp: any, bo: any, lp: any, vc: any, cc: any } =
    {
      bp: undefined,
      bo: undefined,
      lp: undefined,
      vc: undefined,
      cc: undefined
    };
  hookStatus: { running: boolean, indicators: string } = {
    running: false,
    indicators: ''
  };

  constructor(private san: DomSanitizer, private ren: Renderer2) {
    this.toggleHookStatus('Ctor', true);
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;
    this.boundValues.safeCtorVals = this.getSafeValString(bp, bo, lp, vc, cc);

    this.toggleHookStatus('Ctor', false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleHookStatus('NgOnChanges', true);

    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;

    this.boundValues.safeNgOnChangesVals =
      this.getSafeValString(bp, bo, lp, vc, cc, JSON.stringify(changes));

    this.toggleHookStatus('NgOnChanges', false);
  }
  ngOnInit(): void {
    this.toggleHookStatus('NgOnInit', true);
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;

    this.boundValues.safeNgOnInitVals =
      this.getSafeValString(bp, bo, lp, vc, cc);

    this.toggleHookStatus('NgOnInit', false);
  }
  ngDoCheck(): void {
    this.toggleHookStatus('NgDoCheck', true);
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;

    this.boundValues.safeNgDoCheckVals =
      this.getSafeValString(bp, bo, lp, vc, cc);

    this.toggleHookStatus('NgDoCheck', false);
  }
  ngAfterContentInit(): void {
    this.toggleHookStatus('NgAfterContentInit', true);
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;

    this.boundValues.safeNgAfterContentInitVals =
      this.getSafeValString(bp, bo, lp, vc, cc);

    this.toggleHookStatus('NgAfterContentInit', false);
  }
  ngAfterContentChecked(): void {
    this.toggleHookStatus('NgAfterContentChecked', true);
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;

    this.boundValues.safeNgAfterContentCheckedVals =
      this.getSafeValString(bp, bo, lp, vc, cc);

    this.toggleHookStatus('NgAfterContentChecked', false);
  }
  ngAfterViewInit(): void {
    this.toggleHookStatus('NgAfterViewInit', true);
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;

    this.boundValues.safeNgAfterViewInitVals =
      this.getSafeValString(bp, bo, lp, vc, cc);

    this.toggleHookStatus('NgAfterViewInit', false);
  }
  ngAfterViewChecked(): void {
    this.toggleHookStatus('NgAfterViewChecked', true);
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;
    this.boundValues.safeNgAfterViewCheckedVals =
      this.getSafeValString(bp, bo, lp, vc, cc);
    this.toggleHookStatus('NgAfterViewChecked', false);
  }
  ngOnDestroy(): void {
    const bp = this.boundPrimitive;
    const bo = this.boundObj;
    const lp = this.localPrimitive;
    const vc = this.vc;
    const cc = this.cc;
    alert(`onDestroy called.  Values: \r\n
      ${this.getValueTextString(bp, bo, lp, vc, cc)}`);
  }
  getSafeValString(bp: any, bo: any, lp: any, vc: any, cc: any, sc?: any): SafeHtml {
    const val = this.getValueHtmlString(bp, bo, lp, vc, cc, sc);
    this.storePrevVals(bp, bo, lp, vc, cc);
    return this.san.bypassSecurityTrustHtml(val);
  }
  storePrevVals(bp: any, bo: any, lp: any, vc: any, cc: any) {
    this.prevValues.bp = bp;
    this.prevValues.bo = Object.assign({}, bo);
    this.prevValues.lp = lp;
    this.prevValues.vc =  vc;
    this.prevValues.cc = cc;

  }
  getValueHtmlString(bp: any, bo: any, lp: any, vc: any, cc: any, sc?: any): string {
    let rv = `
    <p class='valEntry'
      style="background-color:${this.prevValues.bp === bp ? '' : 'yellow'}">
      <u>Bound Primitive</u>: <b>${bp}</b>
    </p>
    <p class='valEntry'
      style="background-color: ${this.checkObjPropEq(bo) ? '' : 'yellow'}">
      <u>Bound Object</u>: <b>${JSON.stringify(bo)}</b>
    </p>
    <p class='valEntry'
      style="background-color:${this.prevValues.lp === lp ? '' : 'yellow'}">
      <u>Local Primitive</u>: <b>${lp}</b>
    </p>
    <p class='valEntry'
      style="background-color:${this.prevValues.vc === vc ? '' : 'yellow'}">
      <u>@ViewChild</u>: <b>${vc}</b>
    </p>
    <p class='valEntry'
      style="background-color:${this.prevValues.cc === cc ? '' : 'yellow'}">
      <u>@ContentChild</u>: <b>${cc}</b>
    </p>`;
    if (sc) {
      rv += `<p><u>SimpleChanges</u>: <b>${sc}</b></p>`;
    }
    return rv;
  }
  getValueTextString(bp: any, bo: any, lp: any, vc: any, cc: any): string {
    const rv = `
    Bound Primitive: ${bp}
    Bound Object: ${JSON.stringify(bo)}
    Local Primitive: ${lp}
    @ViewChild: ${vc}
    @ContentChild: ${cc}`;
    return rv;
  }
  clearValueDisplays() {
    this.hookNames.forEach((hookName) => {
      const emptyDisplayVal = `
      <p class='valEntry'><u>Bound Primitive</u>:</p>
      <p class='valEntry'><u>Bound Object</u>:</p>
      <p class='valEntry'><u>Local Primitive</u>:</p>
      <p class='valEntry'><u>@ViewChild</u>:</p>
      <p class='valEntry'><u>@ContentChild</u>:</p>`;
      if (hookName !== 'NgAfterViewChecked') {
        // NgAfterViewChecked has already run by the time we get here,
        // so don't clear it!
        this.boundValues['safe' + hookName + 'Vals'] =
          this.san.bypassSecurityTrustHtml(emptyDisplayVal);
      }
    });
  }
  checkObjPropEq(curr: { prop1: string, prop2: number }): boolean {
    const rv = this.prevValues.bo !== undefined
      && curr !== undefined
      && this.prevValues.bo.prop1 === curr.prop1
      && this.prevValues.bo.prop2 === curr.prop2;
    return rv;
  }
  resetRunningHooks() {
    this.hookNames.forEach((hookName) => {
      if (this['cell' + hookName]) {
        this.ren.setStyle(this['cell' + hookName].nativeElement,
          'background-color', '#FFF');
      }
    });
  }
  toggleHookStatus(hookName: string, running: boolean) {
    this.hookStatus.running = running;
    if (running) {
      if (this['cell' + hookName]) {
        this.ren.setStyle(this['cell' + hookName].nativeElement,
          'background-color', 'antiquewhite');
      }
      if (this.hookStatus.indicators.length > 200) {
        this.hookStatus.indicators = '';
      }
      this.hookStatus.indicators += '.';
    }
    if (this.hookIndicator) {
      this.ren.setProperty(this.hookIndicator.nativeElement,
          'innerText', this.hookStatus.indicators);
    }
  }
  changeLocalPrimitiveFunc() {
    this.resetRunningHooks();
    this.clearValueDisplays();
    this.localPrimitive = 'changed - ' + this.counter++;
  }
  changeBoundPrimitiveFunc() {
    this.resetRunningHooks();
    this.clearValueDisplays();
    this.changeBoundPrimitive.emit();
  }
  changeBoundObjRefFunc() {
    this.resetRunningHooks();
    this.clearValueDisplays();
    this.changeBoundObjRef.emit();
  }
  changeBoundObjPropFunc() {
    this.resetRunningHooks();
    this.clearValueDisplays();
    this.changeBoundObjProp.emit();
  }

  getColor(name: string): string {
    switch (name.toLowerCase()) {
      case 'ctor':
        return 'red';
      case 'ngonchanges':
        return 'cyan';
      case 'ngoninit':
        return 'green';
      case 'ngdocheck':
        return 'orange';
      case 'ngaftercontentinit':
        return 'blue';
      case 'ngaftercontentchecked':
        return 'violet';
      case 'ngafterviewinit':
        return 'teal';
      case 'ngafterviewchecked':
        return 'grey';
      case 'ngondestroy':
        return 'gold';
      default:
        return 'black';
    }
  }
}


