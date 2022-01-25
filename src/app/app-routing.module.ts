import { RouterModule, Routes } from '@angular/router';

import { AddCardsComponent } from './add-cards/add-cards.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from './game/game.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'add-cards', component: AddCardsComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
