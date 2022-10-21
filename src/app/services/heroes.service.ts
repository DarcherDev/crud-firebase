import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = "https://heroes-6dcf9-default-rtdb.firebaseio.com";


  constructor(private http: HttpClient) {

  }

  crearHeroes(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe(
        map((resp: any) => {
          heroe.id = resp.name;
          return heroe;
        }));
  }

  actualizarHeroes(heroe: HeroeModel) {

    const heroeTemp = {
      ...heroe
    } as Partial<HeroeModel>;

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map(resp => this.crearArreglo(resp))
      );
  }

  private crearArreglo(heroesObj: any) {

    const heroes: HeroeModel[] = [];

    console.log(heroesObj);

    // if (heroesObj === null) { return []; }

    Object.keys(heroesObj).forEach(key => {

      const heroe: HeroeModel = heroesObj[key];

      heroe.id = key;

      heroes.push(heroe);

    });
    return heroes;
  }


}
