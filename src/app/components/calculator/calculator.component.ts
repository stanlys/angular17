import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public form = new FormGroup({
    value: new FormControl(0.0, Validators.required),
    degree: new FormControl<number>(0),
  });

  public isError = false;

  public isShowCalculatedValue = false;
  public calculatedValue = 0;

  public calc(): void {
    if (!Number(this.form.controls['value'].value)) this.isError = true;
    const degree = Number(this.form.controls['degree'].value) || 1;
    const speed = Number(this.form.controls['value'].value);
    this.calculatedValue = 60 / speed;
    this.isShowCalculatedValue = true;
  }
}
