import { Injectable } from '@angular/core';
import { Card } from '../card-model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor() { }

  getAllAct() {
    const cards = [
      {
        text: "test"
      },
      {
        text: "tttttt"
      },
      {
        text: "eeeeeeemmmmmmm"
      },

    ]
    return this.shuffle(cards)
  }
  getAllDraw() {
    return [
      '111', '222', '333', '444', '555'
    ]
  }

  getAllMiming() {
    return [
      '111', '222', '333', '444', '555'
    ]
  }
  getAllSpeaking() {
    return [
      '111', '222', '333', '444', '555'
    ]
  }
  getAllSurprize() {
    return [
      '111', '222', '333', '444', '555'
    ]
  }


  updateActCards(cards: Card[]){
    // PUT /cards/act body -> cards
  }

  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
