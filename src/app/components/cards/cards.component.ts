import { AfterContentInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RussiarunningService } from 'src/app/services/russiarunning.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements AfterContentInit {
  constructor(public rrs: RussiarunningService) {}

  ngAfterContentInit(): void {
    this.rrs.getEventsList();
  }
}
