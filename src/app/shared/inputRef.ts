import { Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[inputRef]'
})
export class InputRefDirective implements OnInit {
  focus = false;
  constructor(private el: ElementRef){}

  ngOnInit() {

  }



  @HostListener("focus")
  onFocus() {
    this.focus = true;
  }
}
