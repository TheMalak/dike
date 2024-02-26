import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  private windowWidthSubject = new BehaviorSubject<number>(0);
  windowWidth$ = this.windowWidthSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidthSubject.next(window.innerWidth);
      this.getWindowResizeObservable().subscribe((size: number) => {
        this.windowWidthSubject.next(size);
      });
    }
  }

  getWindowResizeObservable(): Observable<number> {
    return fromEvent(window, 'resize').pipe(
      startWith(window.innerWidth),
      map(() => window.innerWidth)
    );
  }

}
