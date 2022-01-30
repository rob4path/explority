import { Card, CardType } from '../shared/models/card-model';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';
import { CardsService } from '../shared/services/cards.service';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  CardType = CardType;
  isLoggedIn: boolean;
  public dragging: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.init();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  async init() {}

  async logout() {
    await this.authService.logout();
    location.reload();
  }

  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
    console.log('handleDragStart', this.dragging);
  }

  handleClick(event: MouseEvent, url?: string): void {
    if (this.dragging) {
      this.dragging = false;
      console.log('handleClick', this.dragging);

      return;
    }
    if (url) {
      this.router.navigateByUrl(url);
      console.log('btn clicked!');
    }
  }
}
