import { Component } from '@angular/core';
import { TG_TOKEN } from 'src/env';
import { parse } from 'node-html-parser';
import { RussiarunningService } from './services/russiarunning.service';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular17';
  public tg_token = TG_TOKEN;

  constructor(private rrS: RussiarunningService) {}

  tests = [
    {
      id: 1,
      text: 'value 1',
    },
    {
      id: 2,
      text: 'value 2 ',
    },
  ];

  public parse(): void {
    this.rrS.getEventsPages();
    this.rrS.getEventsList();
  }
}
