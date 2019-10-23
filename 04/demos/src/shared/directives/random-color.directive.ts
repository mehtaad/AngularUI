import { Directive, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[hsRandomColor]'
})
export class RandomColorDirective implements AfterViewInit {

@HostBinding('style.color') color = 'red';

ngAfterViewInit(): void {
  const int = setInterval( () => {
    this.color = this.getRandomColor();
  }, 500);
  setTimeout( () => {clearInterval(int); }, 5000);
}
private getRandomColor(): string {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

}
