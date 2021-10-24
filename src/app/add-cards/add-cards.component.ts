import { Component, OnInit } from '@angular/core';
import { CardsService } from '../shared/services/cards.service';
import { Card } from '../shared/card-model';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css']
})
export class AddCardsComponent implements OnInit {

  actCards: Card[] = [];

  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
    this.actCards = this.cardsService.getAllAct();
  }

  addCard() {
    this.actCards.push({text: ""})
  }

  save() {
    
  }

}
