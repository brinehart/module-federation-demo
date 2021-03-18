import { Component, OnInit } from '@angular/core';
import { Card } from '../home.types';

@Component({
  selector: 'ff-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
  characters: Card[] = [
    {
      name: 'Cloud Strife',
      description: `The main protagonist, introducing himself as a former member of SOLDIER who now operates as a mercenary.
      Cloud is caught up in the actions of eco-terrorist group AVALANCHE, and although initially uncaring toward their mission,
      he has a change of heart when he begins to discover his shrouded past.`,
      link: 'cloud',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616004883/cloud_strife.jpg'
    },
    {
      name: 'Barret Wallace',
      description: `A faction leader of the anti-Shinra militant group Avalanche. Barret is filled with a burning hatred for
      Shinra, a company he claims is destroying the planet. His right arm has been modified into a firearm, allowing him to
      attack his enemies at long range.`,
      link: 'barret',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616005130/barret_wallace.jpg'
    },
    {
      name: 'Tifa Lockhart',
      description: `A member of the anti-Shinra militant group Avalanche. Tifa manages Seventh Heaven, a bar located in the
      Sector 7 slums. A student of Zangan-style martial arts, she can clobber opponents with her fleet-footed combat techniques.`,
      link: 'tifa',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616005594/tifa_lockhart.png'
    },
    {
      name: 'Aerith Gainsborough',
      description: `A flower peddler living in the Sector 5 slums, Aerith has been under Shinra surveillance all her life because of
      her unique background. Capable of sensing the planet's life force, she offers magical support to her comrades.`,
      link: 'aerith',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616005937/Aerith_gainsborough.png'
    },
    {
      name: 'Red XIII',
      description: `Just as his name implies, he is an animal with fire-red fur. But under his fierce exterior is an intelligence surpassing that of any human's...`,
      link: 'red-xiii',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616006248/red_xiii.jpg'
    },
    {
      name: 'Cait Sith',
      description: `Cait Sith rides on the back of a huge stuffed Mog he magically brought to life. Megaphone in hand, he's always shouting orders and creating dopey attacks...`,
      link: 'cait-sith',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616013868/cait_sith.jpg'
    },
    {
      name: 'Cid Highwind',
      description: `Cid is a tough talking, warm-hearted old pilot who hasn't forgotten his dreams...`,
      link: 'cid',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_crop,g_face,h_210,w_362/v1616041025/cid_highwind.jpg'
    },
    {
      name: 'Yuffie Kisaragi',
      description: `Cunning and sly, she may look like a common thief, but Yuffie is a very skilled and powerful ninja...`,
      link: 'yuffie',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_280/v1616041025/yuffie_kisaragi.jpg'
    },
    {
      name: 'Vincent Valentine',
      description: `A mystical man, stern and upright while at the same time dark and mysterious...`,
      link: 'vincent',
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_crop,h_210,w_362,x_230,y_30/v1616041601/vincent_valentine.jpg'
    },
    {
      name: 'Sephiroth',
      description: `There was one SOLDIER named Sephiroth, who was better than the rest, but when he found out about the terrible experiments that made him, he began to hate Shinra. And then, over time, he began to hate everything.`,
      link: 'sephiroth',
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_210,w_362/v1616041601/sephiroth.jpg'
    }
  ];
}
