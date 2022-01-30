import { AddCardsComponent } from './add-cards/add-cards.component';
import { AddCardsFormComponent } from './add-cards/add-cards-form/add-cards-form.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardStackComponent } from './game/card-stack/card-stack.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from './game/game.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/services/jwt.interceptor';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AddCardsComponent,
    AuthComponent,
    DashboardComponent,
    CardStackComponent,
    AddCardsFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
