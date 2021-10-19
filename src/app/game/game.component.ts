import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  showAct = false;
  showSpeaking = false;
  showDraw = false;
  showSurprize = false;
  showMiming = false;

  actText: string;
  actCards: string[]
  speakingText: string;
  speakingCards: string[]
  drawText: string;
  drawCards: string[]
  mimingText: string;
  mimingCards: string[]
  surprizeText: string;
  surprizeCards: string[]

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.actCards = this.cardsService.getAllAct();
    this.speakingCards = this.cardsService.getAllSpeaking();
    this.drawCards = this.cardsService.getAllDraw();
    this.mimingCards = this.cardsService.getAllMiming();
    this.surprizeCards = this.cardsService.getAllSurprize();
  }

  toggleAct(show: boolean) {
    if (show) {
      this.showAct = true;
      if (this.actCards.length > 0) {
        this.actText = this.actCards.shift()
      }
      else {
        this.actText = "There are no cards anymore for this set! Click again to restart!"
        this.actCards = this.cardsService.getAllAct();
      }
    }
    else {
      this.showAct = false;
    }
  }


  toggleSpeaking(show: boolean) {
    if (show) {
      this.showSpeaking = true;

    }
    else {
      this.showSpeaking = false;
    }
  }

  toggleDraw(show: boolean) {
    if (show) {
      this.showDraw = true;

    }
    else
      this.showDraw = false;
  }

  toggleSurprize(show: boolean) {
    if (show) {
      this.showSurprize = true;

    }
    else
      this.showSurprize = false;
  }

  toggleMiming(show: boolean) {
    if (show) {
      this.showMiming = true;

    }
    else
      this.showMiming = false;
  }

}
