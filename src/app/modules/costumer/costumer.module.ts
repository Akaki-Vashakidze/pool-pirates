import { NgModule } from "@angular/core";
import { KidsBoardComponent } from './kids-board/kids-board.component';
import { CostumerComponent } from "./costumer.component";
import { CostumerRoutinModule } from "./costumer-routing.module";
import { BoardComponent } from './board/board.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    KidsBoardComponent,
    CostumerComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutinModule
  ],
  exports: [],
  providers: [],

})
export class CostumerModule { }