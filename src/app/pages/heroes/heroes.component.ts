import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroesService: HeroesService;
  heroes : HeroeModel[] = [];


  constructor( heroesService : HeroesService) {
    this.heroesService = heroesService;
   }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( resp => this.heroes = resp);
  }

}
