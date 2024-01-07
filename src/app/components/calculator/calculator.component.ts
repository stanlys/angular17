import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public form = new FormGroup({
    value: new FormControl(0.0, Validators.required),
    typeConvert: new FormControl<number>(1),
  });

  public isError = false;

  public isShowCalculatedValue = false;
  public calculatedValue = '';

  public calc(): void {
    const typeConvert = Number(this.form.controls['typeConvert'].value) || 1;
    this.isError = false;
    if (!Number(this.form.controls['value'].value)) {
      this.isError = true;
      return;
    }
    let speed = Number(this.form.controls['value'].value);
    if (speed < 0) speed = speed * -1;
    this.calculatedValue =
      typeConvert === 1 ? this.speedToTemp(speed) : this.tempToSpeed(speed);
    this.isShowCalculatedValue = true;
  }

  private speedToTemp(value: number): string {
    const _calculatedValue = 60 / value;
    const secPerKm = Math.floor(
      (_calculatedValue - Math.floor(_calculatedValue)) * 60
    );
    const minPerKm = Math.floor(_calculatedValue);
    return `Ваш темп ${minPerKm} мин ${secPerKm} сек`;
  }

  private tempToSpeed(value: number): string {
    const _calculatedValue = 60 / value;
    const secPerKm = Math.floor(
      (_calculatedValue - Math.floor(_calculatedValue)) * 100
    );
    const minPerKm = Math.floor(_calculatedValue);
    return `Ваша скорость ${minPerKm}.${secPerKm} км/ч`;
  }
}
