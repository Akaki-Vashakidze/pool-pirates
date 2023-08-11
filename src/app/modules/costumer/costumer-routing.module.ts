import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CostumerComponent } from "./costumer.component";
import { KidsBoardComponent } from "./components/kids-board/kids-board.component";
import { BoardComponent } from "./components/board/board.component";

const routes : Routes = [
    {
        path: '',
        component:CostumerComponent,
        pathMatch:'full'
      },
      {
        path: 'kidsBoard',
        component:BoardComponent,
        pathMatch:'full'
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CostumerRoutinModule {}