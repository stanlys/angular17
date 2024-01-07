import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as utc from 'dayjs/plugin/utc';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class PredictTableComponent {
  public kms = [1, 2, 3, 4, 5, 10, 15, 20, 21.1, 30, 35, 40, 42.2, 50, 100];

  @Input() tempMin!: number;
  @Input() tempSec!: number;

  public calcTimesByKm(km: number): string {
    const timeSec = this.tempMin * km * 60 + this.tempSec * km;
    dayjs.extend(utc);
    dayjs.extend(duration);
    const a = dayjs.duration({
      seconds: timeSec,
    });
    return dayjs.utc(a.asMilliseconds()).format('HH:mm:ss');
  }
}
