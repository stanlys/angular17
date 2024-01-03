import { Component } from '@angular/core';
import { TG_TOKEN } from 'src/env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular17';
  public tg_token = TG_TOKEN;

  constructor() {}

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
}
