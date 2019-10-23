import { OnDestroy, AfterContentInit, OnChanges,
  AfterViewInit, OnInit, DoCheck, AfterContentChecked, AfterViewChecked,
  Component, SimpleChanges, Input, ViewContainerRef, ViewChild,
  TemplateRef, EventEmitter, Output} from '@angular/core';
import { SafeStyle, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements
 OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() boundVal = 0;
  @Output() changeBoundValue = new EventEmitter();
  @ViewChild('container', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('templ1', { read: TemplateRef }) templ1: TemplateRef<any>;
  @ViewChild('templ2', { read: TemplateRef }) templ2: TemplateRef<any>;

  localVal = 0;
  ctor_LastRun: Date = new Date();
  ngOnChanges_LastRun: Date = new Date();
  ngOnInit_LastRun: Date = new Date();
  ngDoCheck_LastRun: Date = new Date();
  ngAfterContentInit_LastRun: Date = new Date();
  ngAfterContentChecked_LastRun: Date = new Date();
  ngAfterViewInit_LastRun: Date = new Date();
  ngAfterViewChecked_LastRun: Date = new Date();
  ngOnDestroy_LastRun: Date;

  hookLog: SafeHtml[] = [];
  templ1Active = false;
  constructor(private san: DomSanitizer) {
    this.ctor_LastRun = new Date();
    this.logEntry('ctor', this.ctor_LastRun);
  }
  changeBoundVal() {
    this.logEntry('----- Begin Bound Value Change -----', new Date());
    this.logEntry('changeBoundVal', new Date());
    this.changeBoundValue.emit();
    setTimeout( () => {
      this.logEntry('----- End Bound Value Change -----', new Date());
    }, 200);
  }
  changeLocalVal() {
  this.logEntry('----- Begin Local Value Change -----', new Date());
    this.logEntry('changeLocalVal', new Date());
    this.localVal++;
    setTimeout( () => {
      this.logEntry('----- End Local Value Change -----', new Date());
    }, 200);
  }
  injectView() {
    this.logEntry('----- Begin View Change -----', new Date());
    const tmpl: TemplateRef<any> = this.templ1Active ? this.templ2 : this.templ1;
    this.vcr.clear();
    this.vcr.createEmbeddedView(tmpl);
    this.templ1Active = !this.templ1Active;
    setTimeout( () => {
      this.logEntry('----- End View Change -----', new Date());
    }, 200);
  }
  logEntry(name: string, dt: Date) {
    const entry = '<span style="color:' + this.getColor(name) + '">' +
      name + ' @ ' + this.formatTime(dt) + '</span>';
    const safeEntry = this.san.bypassSecurityTrustHtml(entry);
    this.hookLog.unshift(safeEntry);
  }
  clearLog() {
    this.hookLog = [];
    this.logEntry('----- Log Cleared -----', new Date());
  }
  onMouseMove() {
    // nothing to do, just need to event to fire...
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnChanges_LastRun  = new Date();
    this.logEntry('ngOnChanges', this.ngOnChanges_LastRun);
  }
  ngOnInit(): void {
    this.ngOnInit_LastRun  = new Date();
    this.logEntry('ngOnInit', this.ngOnInit_LastRun);
  }
  ngDoCheck(): void {
    this.ngDoCheck_LastRun  = new Date();
    this.logEntry('ngDoCheck', this.ngDoCheck_LastRun);
  }
  ngAfterContentInit(): void {
    this.ngAfterContentInit_LastRun  = new Date();
    this.logEntry('ngAfterContentInit', this.ngAfterContentInit_LastRun);
  }
  ngAfterContentChecked(): void {
    this.ngAfterContentChecked_LastRun  = new Date();
    this.logEntry('ngAfterContentChecked', this.ngAfterContentChecked_LastRun);
  }
  ngAfterViewInit(): void {
    this.ngAfterViewInit_LastRun  = new Date();
    this.logEntry('ngAfterViewInit', this.ngAfterViewInit_LastRun);
  }
  ngAfterViewChecked(): void {
    this.ngAfterViewChecked_LastRun  = new Date();
    this.logEntry('ngAfterViewChecked', this.ngAfterViewChecked_LastRun);
  }
  ngOnDestroy(): void {
    this.ngOnDestroy_LastRun = new Date();
    this.logEntry('ngOnDestroy', this.ngOnDestroy_LastRun);
    alert('ngOnDestroy called');
  }
  formatTime(val: Date): string {
    return val.getHours() + ':' + val.getMinutes() + ':' +
      val.getSeconds() + '.' + val.getMilliseconds();
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


