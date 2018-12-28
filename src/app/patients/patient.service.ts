import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Patient } from './patient';
import { PATIENTS } from './mock-patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor() { }

  getHeroes(): Observable<Patient[]> {
    return of( PATIENTS );
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Patient[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
