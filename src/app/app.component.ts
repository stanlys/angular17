import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular17';
  tests = [{
    id: 1,
    text: 'value 1'
  },{
    id:2,
    text: 'value 2 '
  }]
}
