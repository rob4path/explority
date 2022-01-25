import { Component, OnInit } from '@angular/core';

import { Card } from '../shared/models/card-model';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cards: Card[] = [];
  constructor(public cardsService: CardsService) {}

  async ngOnInit() {
    this.cards = await this.cardsService.getAll();
  }

  async deleteById(id: string) {
    await this.cardsService.deleteById(id);
  }
}
