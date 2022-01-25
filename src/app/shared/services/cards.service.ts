import { Card, CardType } from '../models/card-model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  async getAll() {
    const cards = await this.http.get<Card[]>(`cards/all`).toPromise();
    return cards;
  }

  async getAllByType(type: CardType) {
    const cards = await this.http
      .get<Card[]>(`/cards`, {
        params: { type: type },
      })
      .toPromise();
    return cards;
  }

  async addCard(card: Card) {
    console.log('POST addCard', card);
    const newCard = await this.http.post(`/cards`, card).toPromise();
    return newCard;
  }

  async updateCards(cards: Card[], type: CardType) {
    console.log('put updateCards', cards);
    const newCard = await this.http
      .put(
        `/cards`,
        { cards: cards },
        {
          params: { type: type },
        }
      )
      .toPromise();

    return newCard;
  }

  async deleteById(id: string) {
    const deletedCard = await this.http.delete(`/cards/${id}`).toPromise();
    console.log('DELETE by id', deletedCard);
    return deletedCard;
  }

  async updateById(id: string, card: Card) {
    const updatedCard = await this.http.put(`/cards/${id}`, card).toPromise();
    console.log('PUT updateById ', updatedCard);
    return updatedCard;
  }

  shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
}
