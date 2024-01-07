import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TG_TOKEN } from 'src/env';
import { RussiarunningService } from './services/russiarunning.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit {
  title = 'Буговой журнал';
  public tg_token = TG_TOKEN;

  constructor(private rrS: RussiarunningService) {}

  ngAfterContentInit(): void {
    // console.log('after');
    // this.rrS.getEventsList();
  }

  ngOnInit(): void {
    // console.log('rrr');
    // this.rrS.getEventsList();
  }

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
