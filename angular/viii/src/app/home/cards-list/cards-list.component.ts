import { Component, OnInit } from '@angular/core';
import { Card } from '../home.types';

@Component({
  selector: 'viii-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [
    {
      name: 'Characters',
      description: 'View Characters from Final Fantasy VIII',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280,h_155/v1616000971/ff_viii_characters.jpg',
      link: 'characters'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
