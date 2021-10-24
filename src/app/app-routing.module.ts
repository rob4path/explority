import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardsComponent } from './add-cards/add-cards.component';
import { GameComponent } from './game/game.component';
const routes: Routes = [
  { path: 'add-cards', component: AddCardsComponent },
  { path: '', component: GameComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
