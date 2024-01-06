import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

export const routes: Routes = [
  { path: '*', component: AppComponent },
  { path: 'test', component: CalculatorComponent },
  {
    path: 'starts',
    loadComponent: () =>
      import('./components/cards/cards.component').then(
        (m) => m.CardsComponent
      ),
  },
  {
    path: 'calc',
    loadComponent: () =>
      import('./components/calculator/calculator.component').then(
        (m) => m.CalculatorComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
