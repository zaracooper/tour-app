import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TourEvent } from 'src/app/core/models/tour-event';
import { TourEventsService } from 'src/app/core/services/tour-events.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-tour-events',
  templateUrl: './tour-events.component.html',
  styleUrls: ['./tour-events.component.css']
})
export class TourEventsComponent implements OnInit {
  events: TourEvent[] = [];

  constructor(private eventService: TourEventsService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => this.events = events);
  }
}
