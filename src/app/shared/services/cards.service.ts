import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }
  
  getAllAct() { 
    const cards = [
      '111', '222', '333', '444', '555'
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
  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
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
