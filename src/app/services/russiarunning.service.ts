import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parse } from 'node-html-parser';
import axios from 'axios';
import { PAGE1 } from '../page1';
import { BehaviorSubject } from 'rxjs';
import { PAGE2 } from '../page2';
import { PAGE7 } from '../page7';
import { PAGE6 } from '../page6';
import { PAGE5 } from '../page5';
import { PAGE4 } from '../page4';
import { PAGE3 } from '../page3';
import * as dayjs from 'dayjs';

const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];
dayjs.locale('ru');

@Injectable({
  providedIn: 'root',
})
export class RussiarunningService {
  public cards$ = new BehaviorSubject<Array<ICard>>([]);

  constructor(private _http: HttpClient) {}

  public async getEvents2(): Promise<void> {
    const r = await axios.get('https://russiarunning.com/events', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
    console.log(r.data);
    // this._html = r.data;
  }

  public getEvents(): void {
    this._http.get('https://russiarunning.com/events', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
    // .subscribe((html) => (this._html = html));
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
    const r = parse([PAGE1, PAGE2, PAGE3, PAGE4, PAGE5, PAGE6, PAGE7].join());
    const cardElements = r.querySelectorAll('.event-card__container');
    cardElements.forEach((c, i) => {
      const cardInfo = c.querySelectorAll('.event-card__info');
      const dateStr = c.querySelector('.event-card__header-col').text;
      let [day, month] = dateStr.split(` `);
      day = day.split('–')[0];
      console.log(dateStr.split(` `));
      const monthIndex = MONTHS.findIndex((m) => m === month) || 0;
      const dayy = dayjs()
        .set('date', Number(day))
        .set('month', monthIndex)
        .format('DD - MM - YYYY');
      const event = c.querySelector('.event-card__name');
      const location = c.querySelector('.event-card__location').text;
      const img = c.querySelector('.event-card__cover-img');
      let imgUrl = img.attributes['style'].slice(23, -3);
      imgUrl = imgUrl.startsWith('https') ? imgUrl : '';
      const title = event.text;
      const link = event.attributes['href'];
      cards.push({
        id: i,
        imgUrl,
        link,
        date: dayy,
        title,
        location,
      });
    });
    this.cards$.next(cards);
  }
}

export interface ICard {
  id: number;
  link: string;
  date: string;
  title: string;
  imgUrl?: string;
  location: string;
}
