import { NgModule } from '@angular/core';
import { AddCardComponent } from './add-card/add-card.component';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
const routes: Routes = [
  { path: 'add-cards', component: AddCardComponent },
  { path: '', component: GameComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
