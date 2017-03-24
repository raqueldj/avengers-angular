import { Component } from '@angular/core';
import { Hero } from '../modele';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{
  heroes : Hero[] = [/*{
    id: 1,
    name: 'robin'
  }*/];

  Id = 1;

  addHero(name) {
    this.heroes.push({
      id: this.Id++,
      name
    })
  }

  removeHero(heroIndex) {
    this.heroes.splice(heroIndex, 1);
  }

}
