import { Card, CardType } from '../../models/card-model';
import { Component, Input, OnInit } from '@angular/core';

import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-add-cards-form',
  templateUrl: './add-cards-form.component.html',
  styleUrls: ['./add-cards-form.component.css'],
})
export class AddCardsFormComponent implements OnInit {
  cards: Card[] = [];
  CardType = CardType;
  saved: boolean = true;
  deleteSlideIn: boolean = false;
  changed: boolean[] = [];
  toSave: boolean[] = [];
  @Input() category: string;
  @Input() type: CardType;

  editing: boolean = true;
  constructor(public cardsService: CardsService) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.cards = await this.cardsService.getAllByType(this.type);
  }

  editOne() {
    this.editing = true;
  }
  saveNewCard(i: number) {
    this.toSave[i] = true;
  }

  changedI(i: number) {
    this.changed[i] = true;
  }

  async updatedById(id: string, card: Card, i: number) {
    this.changed[i] = false;
    await this.cardsService.updateById(id, card);
  }

  async deleteById(id: string) {
    await this.cardsService.deleteById(id);
    this.init();
  }

  async addCardToDb(card: Card, i: number) {
    await this.cardsService.addCard(card);
    this.changed[i] = false;
    this.toSave[i] = true;

    this.init();
  }

  addCard() {
    this.saved = false;
    this.deleteSlideIn = true;
    this.cards.push({ text: '', type: this.type });
  }

  async save() {
    this.saved = true;

    await this.cardsService.updateCards(this.cards, this.type);
    this.init();
  }
}
