import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]',
  standalone: true
})
export class HighlightCourseDirective implements OnChanges {
  @Input() appHighlightCourse = false; // Expecting boolean 'popular'

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appHighlightCourse) {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '4px solid #fbd38d'); // A soft orange/gold
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fffaf0'); // Very subtle background
      this.renderer.setAttribute(this.el.nativeElement, 'title', 'Popular Course!');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border-left');
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
      this.renderer.removeAttribute(this.el.nativeElement, 'title');
    }
  }
}
