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
      image: '/assets/images/logos/FFVII_logo.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
