import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourEventsComponent } from './tour-events/tour-events.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TourEventsComponent}
];

@NgModule({
  declarations: [
    TourEventsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FeaturesModule { }
