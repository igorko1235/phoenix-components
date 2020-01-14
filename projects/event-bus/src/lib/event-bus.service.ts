import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class EventBusService {

  constructor() {
    const currentService = (window as any).avlPlatformEventBusService;
    if (!currentService) {
      const newEventSubject = new Subject();
      (window as any).avlPlatformEventBusService = newEventSubject;
      this.subject$ = newEventSubject;
    } else {
      this.subject$ = currentService;
    }
  }

  private subject$ = new Subject();

  on(event: Events): Observable<any> {
    return this.subject$
      .pipe(
        filter((e: EmitEvent) => {
          return e.name === event;
        }),
        map((e: EmitEvent) => {
          return e.value;
        })
      );
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }
}

export class EmitEvent {
  constructor(public name: any, public value?: any) {
  }
}

export enum Events {
  CustomerSelected
}
