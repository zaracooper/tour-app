import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TourEvent } from '../models/tour-event';

@Injectable({
  providedIn: 'root'
})
export class TourEventsService {
  private eventsPath = 'tour-events';

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<TourEvent[]>(environment.apiUrl+this.eventsPath);
  }
}
