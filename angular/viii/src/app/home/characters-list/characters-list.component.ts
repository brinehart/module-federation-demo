import { Component, OnInit } from '@angular/core';
import { Card } from '../home.types';

@Component({
  selector: 'viii-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
  characters: Card[] = [
    {
      name: 'Squall Leonhart',
      description: `Right and wrong are not what separate us and our enemies. It's our different standpoints, our perspectives that separate us.`,
      link: 'squall',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_fill,h_220,w_449/v1616091999/squall.png'
    },
    {
      name: 'Rinoa Heartilly',
      description: `Look into my eyes... You're-going-to-like-me... You're-going-to-like-me... Did it work?`,
      link: 'rinoa',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_fill,h_220,w_449/v1616091999/rinoa.png'
    },
    {
      name: 'Quistis Trepe',
      description: `You know, the boys often choke on this test when I come with them. I guess my charm makes them nervous...`,
      link: 'quistis',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_fill,h_220,w_449/v1616005594/quistis.png'
    },
    {
      name: 'Zell Dincht',
      description: `Why don't you try to show a little more passion...? You know, like me!`,
      link: 'zell',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_fill,h_220,w_449/v1616005937/zell.png'
    },
    {
      name: 'Selphie Tilmitt',
      description: `...I... I did it, everyone...! I know the stage got destroyed, but I performed... My dream band... I was able to carry out my dream...`,
      link: 'selphie',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_fill,h_220,w_449/v1616006248/selphie.jpg'
    },
    {
      name: 'Irvine Kinneas',
      description: `An expert marksman. Can use specialized bullets to attack enemies. Doesn't perform very well under pressure.`,
      link: 'irvine',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_fill,h_220,w_449/v1616013868/irvine.jpg'
    }
  ];
}
