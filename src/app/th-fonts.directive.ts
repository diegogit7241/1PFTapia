import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appThFonts]'
})
export class ThFontsDirective {

  constructor(private element: ElementRef) { 
    element.nativeElement.style.fontSize = "20px";
  }

}
