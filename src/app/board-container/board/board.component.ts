import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../board-container.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: Board;
  constructor() { }

  ngOnInit(): void {
  }

}
