import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  constructor(private elem:ElementRef){}
  
  @HostListener('mouseover')
  onMouseOver() {
    this.background('10px 10px #abd8eb');
    
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.background('0px 0px 0px');
  }

  private background(action:string){
    this.elem.nativeElement.style.boxShadow = action;

  }

}
