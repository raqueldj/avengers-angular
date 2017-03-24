import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../modele';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero: Hero;

  @Output() deleteRequest : EventEmitter<Hero> = new EventEmitter();
  
  removeHero(){
    this.deleteRequest.emit(this.hero);
  }
}
