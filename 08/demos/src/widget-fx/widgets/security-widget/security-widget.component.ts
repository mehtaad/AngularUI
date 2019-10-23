import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';
import { DomSanitizer, SafeHtml,
  SafeStyle, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'security-widget',
  templateUrl: './security-widget.component.html',
  styleUrls: ['./security-widget.component.scss']
})
export class SecurityWidgetComponent implements IWidget {
  widgetTitle = 'Bypassing Security';
  unsafeHtml = `<b>Text styling works</b>
                <a href='javascript:alert("pwned")'>
                But Links do not</a>`;
  unsafeHref = 'javascript:alert("pwned")';
  unsafeStyle = 'background-color:red';
  safeHtml: SafeHtml;
  safeHref: SafeUrl;
  safeStyle: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {
    this.safeHref = sanitizer.bypassSecurityTrustUrl(this.unsafeHref);
    this.safeHtml = sanitizer.bypassSecurityTrustHtml(this.unsafeHtml);
    this.safeStyle = sanitizer.bypassSecurityTrustStyle(this.unsafeStyle);

  }
}
