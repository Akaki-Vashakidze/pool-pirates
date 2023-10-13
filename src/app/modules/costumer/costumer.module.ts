import { NgModule } from "@angular/core";
import { KidsBoardComponent } from './components/kids-board/kids-board.component';
import { CostumerComponent } from "./costumer.component";
import { CostumerRoutinModule } from "./costumer-routing.module";
import { BoardComponent } from './components/board/board.component';
import { CommonModule } from "@angular/common";
import { StarComponent } from './components/star/star.component';
import { StarOffComponent } from './components/star-off/star-off.component';
import { StarKidsComponent } from "./components/star-kids/star-kids.component";
import { StarOffKidsComponent } from "./components/star-off-kids/star-off-kids.component";
import { StarsInfoComponent } from './components/stars-info/stars-info.component';
import { TranslatePipe } from "../shared/pipes/translate.pipe";
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    KidsBoardComponent,
    CostumerComponent,
    BoardComponent,
    StarComponent,
    StarOffComponent,
    StarKidsComponent,
    StarOffKidsComponent,
    StarsInfoComponent,
    TranslatePipe,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutinModule
  ],
  exports: [
    TranslatePipe
  ],
  providers: [],

})
export class CostumerModule { }