import { Injectable } from '@angular/core';
import { Service } from '../interfaces/services';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DikeServicesService {

  public activeIndex: number = 0;
  public data: Service[] = [];
  public currentService!: Service;
  public names: string[] = [];
  public dataChanged$: Subject<Service[]> = new Subject<Service[]>();
  public indexChanged$: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) {
    this.http.get<Service[]>('./assets/data/services.json').subscribe(data => {
      this.data = data;
      this.names = this.data.map(service => service.name);
      this.currentService = this.data[0];
      this.dataChanged$.next(this.data);
    });
  }

  setCurrentServiceByIndex(index: number) {
    if (index >= 0 && index < this.data.length) {
      this.activeIndex = index;
      this.currentService = this.data[index];
      this.indexChanged$.next(this.activeIndex);
      this.dataChanged$.next(this.data);
    }
  }
}
