import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { parse } from 'node-html-parser';
import axios from 'axios';
import { PAGE1 } from '../page1';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RussiarunningService {
  private _html: any;

  public cards$ = new Subject<Array<ICard>>();

  constructor(private _http: HttpClient) {}

  public async getEvents2(): Promise<void> {
    const r = await axios.get('https://russiarunning.com/events', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
    console.log(r.data);
    this._html = r.data;
  }

  public getEvents(): void {
    this._http
      .get('https://russiarunning.com/events', {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .subscribe((html) => (this._html = html));
  }

  public getEventsPages(): number {
    const r = parse(PAGE1);
    const pagginator = r.querySelector('.pagination__row');
    const pagginatorL = pagginator.childNodes.length;
    console.log(pagginator.childNodes[pagginatorL - 2].textContent);
    return 0;
  }

  public getEventsList(): void {
    const cards: Array<ICard> = [];
    const r = parse(PAGE1);
    const cardsElements = r.querySelectorAll('.event-card__info');
    cardsElements.forEach((c, i) => {
      const date = c.querySelector('.event-card__header-col').text;
      const event = c.querySelector('.event-card__name');
      const title = event.text;
      const link = event.attributes['href'];

      const location = c.querySelector('.event-card__location').text;
      cards.push({ id: i, link, date, title, location });
    });
    this.cards$.next(cards);
  }
}

export interface ICard {
  id: number;
  link: string;
  date: string;
  title: string;
  location: string;
}
