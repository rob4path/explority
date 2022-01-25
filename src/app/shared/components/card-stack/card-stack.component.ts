import { Card, CardType } from '../../models/card-model';
import { Component, Input, OnInit } from '@angular/core';

import { CardsService } from '../../services/cards.service';
import { CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css'],
})
export class CardStackComponent implements OnInit {
  showCard: boolean = false;
  text: string;
  cards: Card[] = [];

  public dragging: boolean;

  CardType = CardType;
  cardsFinish =
    'There are no cards anymore for this set! Click again to restart!';
  @Input() type: CardType;
  @Input() img: string;

  constructor(private cardsService: CardsService) {}

  async ngOnInit() {
    this.cards = this.cardsService.shuffle(
      await this.cardsService.getAllByType(this.type)
    );
  }

  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  async handleClick(event: MouseEvent) {
    if (this.dragging) {
      this.dragging = false;
      return;
    } else {
      if (this.showCard) {
        this.showCard = false;
      } else {
        if (this.cards.length > 0) {
          this.text = this.cards.shift().text;
        } else {
          this.text = this.cardsFinish;
          this.ngOnInit();
        }
        this.showCard = true;
      }
    }
  }

  async toggle(show: boolean) {
    console.log(show);

    if (show) {
      if (this.cards.length > 0) {
        this.text = this.cards.shift().text;
      } else {
        this.text = this.cardsFinish;
        this.cards = await this.cardsService.getAllByType(this.type);
      }
    } else {
    }
  }
}
