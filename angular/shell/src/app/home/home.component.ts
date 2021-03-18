import { Component, OnInit } from '@angular/core';
import { Game } from './home.types';

@Component({
  selector: 'ff-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: Game[] = [
    {
      name: 'Final Fantasy VII',
      description: `
        Final Fantasy VII follows the story of mercenary Cloud Strife, who is hired by the eco-terrorist
        group AVALANCHE—led by Barret Wallace—to help fight the mega-corporation Shinra Electric Power Company,
        who attempts to drain the planet's lifeblood as an energy source to further their profits. Apathetic to
        the cause, Cloud initially fights for personal gain, and for the promise he made to childhood friend Tifa
        Lockhart. Cloud eventually joins forces with many others to save the planet, which is threatened by Shinra
        and Cloud's nemesis Sephiroth, and discovers a reason to fight for a cause other than his own.`,
      link: 'vii',
      image: 'https://res.cloudinary.com/brinehart/image/upload/v1615995006/FFVII_logo_zmecp8.png'
    },
    {
      name: 'Final Fantasy VIII',
      description: `Final Fantasy VIII is the eighth main installment in the Final Fantasy series, developed and
      published by Squaresoft. It was released in February 1999 for the PlayStation. Final Fantasy VIII strives for
      thematic combination of fantasy and realism. It was the first Final Fantasy game to have realistically proportioned
      characters—a departure from the super deformed designs used in the previous titles. The game locations were designed
      to resemble real world locations, rental cars and trains are used for in-game travel instead of fantasy-like vehicles,
      and to enhance the feeling of realism, motion capture technology was used to give the characters lifelike movements.
      Different nations and factions in Final Fantasy VIII have their own flags, their designs based on the country/group's
      history and culture.`,
      link: 'viii',
      image: 'https://res.cloudinary.com/brinehart/image/upload/v1615995006/FFVIII_logo_ctkdix.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
