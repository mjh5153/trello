import { AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { CardComponent} from './card/card.component';
import * as uuid from 'uuid';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit, AfterViewInit {

  @Input() board: any;

  cards: Card[];
  items: {} = [{status: 'backlog'}, {status:'ready for work'},
   {status:'In Progress'},
   {status:'Verifying'},
   {status:'Done'},
   {status:'Resolved'}
  ]
  disabled: boolean = true;
  cardStatus: string;

  @ViewChildren('input')
  input: QueryList<ElementRef<HTMLInputElement>>;

  constructor() { }

  ngOnInit(): void {
    this.cards = [{
      title: 'Setup Angular Cli', status: 'In Progress', id: uuid.v4()
    },
    {
      title: 'install and configure tailwindcss', status: 'backlog', id: uuid.v4()
    }];
  }

  ngAfterViewInit() {
  }

  onClick(inputIndex) {
    this.disabled = false;

    let inputArray = this.input.toArray();

    inputArray.forEach((item, index) => {
      if(index === inputIndex) {
        setTimeout(() => {
          item.nativeElement.focus();
        },0)
      }
    })
  }

  setStatus(status) {
    console.log('status', status)
    this.cards.map((card) => card.status)
  }

  setStyle(i) {
    if(this.disabled) {
      return {
        'display': 'inline-block'
      }
    } else {
      return {
        'display': 'none'
      }
    }
  }
}
interface Card {
  title: string,
  status: string,
  id: string,
}
