import { Component, OnInit } from '@angular/core';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  actCards: string[] = [];

  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
    this.actCards = this.cardsService.getAllAct();
  }

}
