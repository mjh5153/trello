import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardContainerComponent } from './board-container/board-container.component';
import { BoardComponent } from './board-container/board/board.component';
import { CardContainerComponent } from './board-container/board/card-container/card-container.component';
import { CardComponent } from './board-container/board/card-container/card/card.component';
import { CardRefDirective } from './shared/cardRef';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardContainerComponent,
    BoardComponent,
    CardContainerComponent,
    CardComponent,
    CardRefDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
