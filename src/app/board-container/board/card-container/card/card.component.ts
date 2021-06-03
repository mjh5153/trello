import { Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { CardRefDirective } from 'src/app/shared/cardRef';
import { InputRefDirective } from 'src/app/shared/inputRef';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  @HostBinding("class.focus")
  get focus() {
    return this.input ? this.input.focus : false;
  }

  // @HostBinding("class.click")
  // get click() {
  //   return
  // }
  constructor() { }

  ngOnInit(): void {

  }

  onFocus() {
    console.log('edit!')
  }
}
