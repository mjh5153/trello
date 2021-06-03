import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})

export class BoardContainerComponent implements OnInit {

  board: Board;
  constructor() { }

  ngOnInit(): void {
    this.board = {name: 'tello board', columns: ['In Progress', 'Verifying', 'Done', 'Resolved']}
  }

}
export interface Board {
  name: string,
  columns: string[]
}

