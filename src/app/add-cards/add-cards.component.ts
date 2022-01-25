import { Card, CardType } from '../shared/models/card-model';
import { Component, OnInit } from '@angular/core';

import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css'],
})
export class AddCardsComponent implements OnInit {
  actCards: Card[] = [];
  speakCards: Card[] = [];
  drawCards: Card[] = [];
  mimingCards: Card[] = [];
  surprizeCards: Card[] = [];
  CardType = CardType;

  editing = false;

  constructor(public cardsService: CardsService) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.actCards = await this.cardsService.getAllByType(CardType.Act);
    this.drawCards = await this.cardsService.getAllByType(CardType.Draw);
    this.mimingCards = await this.cardsService.getAllByType(CardType.Miming);
    this.speakCards = await this.cardsService.getAllByType(CardType.Speak);
    this.surprizeCards = await this.cardsService.getAllByType(
      CardType.Surprize
    );
  }
  editOne() {
    this.editing = true;
  }
  async updatedById(id: string, card: Card) {
    await this.cardsService.updateById(id, card);
  }

  async deleteById(id: string) {
    await this.cardsService.deleteById(id);
    this.actCards = await this.cardsService.getAllByType(CardType.Act);
    this.drawCards = await this.cardsService.getAllByType(CardType.Draw);
    this.mimingCards = await this.cardsService.getAllByType(CardType.Miming);
    this.speakCards = await this.cardsService.getAllByType(CardType.Speak);
    this.surprizeCards = await this.cardsService.getAllByType(
      CardType.Surprize
    );
  }

  async addCardToDb(card: Card) {
    await this.cardsService.addCard(card);
    this.init();
  }

  addCard(card: CardType) {
    switch (card) {
      case CardType.Act: {
        this.actCards.push({ text: '', type: CardType.Act });
        break;
      }
      case CardType.Draw: {
        this.drawCards.push({ text: '', type: CardType.Draw });
        break;
      }
      case CardType.Miming: {
        this.mimingCards.push({ text: '', type: CardType.Miming });
        break;
      }
      case CardType.Speak: {
        this.speakCards.push({ text: '', type: CardType.Speak });
        break;
      }
      case CardType.Surprize: {
        this.surprizeCards.push({ text: '', type: CardType.Surprize });
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }

  async save(card: CardType) {
    switch (card) {
      case CardType.Act: {
        await this.cardsService.updateCards(this.actCards, CardType.Act);
        break;
      }
      case CardType.Draw: {
        await this.cardsService.updateCards(this.drawCards, CardType.Draw);
        break;
      }
      case CardType.Miming: {
        await this.cardsService.updateCards(this.mimingCards, CardType.Miming);
        break;
      }
      case CardType.Speak: {
        await this.cardsService.updateCards(this.speakCards, CardType.Speak);
        break;
      }
      case CardType.Surprize: {
        await this.cardsService.updateCards(
          this.surprizeCards,
          CardType.Surprize
        );
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
}
