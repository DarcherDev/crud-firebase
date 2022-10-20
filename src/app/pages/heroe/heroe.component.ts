import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from "@angular/forms";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor( private HeroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){

    if(form.invalid){
      console.log('formaulario no valido');
      return;
    }

    if(this.heroe.id){
      this.HeroesService.actualizarHeroes( this.heroe )
      .subscribe(resp => {
        console.log(resp);
      });
    }else{
      this.HeroesService.crearHeroes( this.heroe )
      .subscribe(resp => {
        // console.log(resp);
        this.heroe = resp;
      })
    }

  }
}
