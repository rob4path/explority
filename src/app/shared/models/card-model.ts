
export enum CardType {
    Act = 'act',
    Draw = 'draw',
    Speak = 'speak',
    Miming = 'miming',
    Surprize = 'surprize',
}

export class Card{
    text: string;
    type: CardType;
}
