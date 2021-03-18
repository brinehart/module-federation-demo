import { Component, OnInit } from '@angular/core';
import { Card } from '../home.types';

@Component({
  selector: 'ff-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [
    {
      name: 'Characters',
      description: 'View Characters from Final Fantasy VII',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616000971/965_i5bs0m.jpg',
      link: 'characters'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
