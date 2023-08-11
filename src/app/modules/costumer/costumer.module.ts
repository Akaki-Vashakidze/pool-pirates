import { NgModule } from "@angular/core";
import { KidsBoardComponent } from './components/kids-board/kids-board.component';
import { CostumerComponent } from "./costumer.component";
import { CostumerRoutinModule } from "./costumer-routing.module";
import { BoardComponent } from './components/board/board.component';
import { CommonModule } from "@angular/common";
import { StarComponent } from './components/star/star.component';
import { StarOffComponent } from './star-off/star-off.component';


@NgModule({
  declarations: [
    KidsBoardComponent,
    CostumerComponent,
    BoardComponent,
    StarComponent,
    StarOffComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutinModule
  ],
  exports: [],
  providers: [],

})
export class CostumerModule { }