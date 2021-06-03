import { Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[toggleEdit]'
})
export class CardRefDirective implements OnInit {

  constructor(private el: ElementRef){}

  ngOnInit() {

  }



  @HostListener("click")
  onClick() {
    this.el.nativeElement.style.display = 'none';
  }
}
