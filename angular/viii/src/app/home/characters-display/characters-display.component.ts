import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Character } from '../home.types';

@Component({
  selector: 'viii-characters-display',
  templateUrl: './characters-display.component.html',
  styleUrls: ['./characters-display.component.scss']
})
export class CharactersDisplayComponent implements OnInit {
  selectedCharacter: Character | undefined;
  columnsToDisplay = ['key', 'value'];
  characters: Character[] = [
    {
      id: 'squall',
      name: 'Squall Leonhart',
      description: `
      Squall Leonhart is the main protagonist of Final Fantasy VIII. A young and aloof SeeD mercenary, others view him as cold and focused until he begins to question the way he has chosen to live his life. Squall's weapon, the gunblade, is one of the iconic weapons of the Final Fantasy series. Squall is later given the title Commander (委員長, Iinchō?, lit. Chairman).

      Squall idolizes the mythical winged lion Griever, holding it as an ideal of courage and strength, traits he wishes to possess himself. The lion has come to be his symbol, the same way Rinoa is associated with angel wings.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616035907/squall_profile.png',
      bioInfo: {
        occupation: 'Mercenary',
        home: 'Balamb Garden',
        affiliation: 'SeeD',
      },
      physicalDetails: {
        gender: 'Male',
        height: `173 cm (5'8")`,
        race: 'Human',
        hairColor: 'Brown',
        eyeColor: 'Blue',
        bloodType: 'AB',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Renzokuken',
      weapon: 'Gunblade',
      ultimateWeapon: 'Lion Heart',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Hideo Ishikawa',
            language: 'Japanese'
          },
          {
            name: 'Doug Erholtz',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'rinoa',
      name: 'Rinoa Heartilly',
      description: `
        Rinoa Heartilly is a playable character in Final Fantasy VIII. She wields a unique weapon called the blaster edge in battle, a bladed projectile she launches from a firing mechanism on her left arm. After hitting the target, the projectile returns to Rinoa like a boomerang. Rinoa's faithful dog, Angelo, accompanies her in battle by attacking the enemy or aiding the party.

        Rinoa is known for her trademark angel wings printed on the back of her duster sweater and, as such, her "character symbol" is a white feather that signifies the wings. She is Squall Leonhart's love interest and is featured in the game's logo with him. Apart from the angel wings symbol and her ring, shooting stars have a significance to Rinoa. She points at a shooting star during her introductory scene, her most potent weapon is Shooting Star, and her ultimate Limit Breaks is called Wishing Star.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616038737/rinoa_profile.png',
      bioInfo: {
        occupation: 'Strategist',
        home: 'Deling City; Timber',
        affiliation: 'Forest Owls',
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Female',
        height: `161 cm (5'3")`,
        hairColor: 'Black with caramel streaks',
        eyeColor: 'Dark Brown',
        bloodType: 'Unknown',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Combine, Angel Wing',
      weapon: 'Blaster Edge',
      ultimateWeapon: 'Shooting Star',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Kana Hanazawa',
            language: 'Japanese'
          },
          {
            name: 'Skyler Davenport',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'quistis',
      name: 'Quistis Trepe',
      description: `
        Quistis Trepe is a playable character in Final Fantasy VIII. She is a child prodigy and Blue Mage, and Instructor No. 14 at Balamb Garden. Her fans are referred as "Trepies" after her fan club.

        Quistis wears a salmon zipped vest, with a gold-rimmed fold-over collar, that is zipped just below the ribcage exposing her midriff. She wears brown arm warmers and brown gloves, a long salmon skirt with a silver waistband, black pants, a brown belt and brown shoes. She has blue eyes and wears her blond hair tied up held with a silver comb accessory, and has two long fringes framing her face. As an instructor in Balamb Garden she wears her SeeD uniform and a pair of silver-rimmed glasses.

        Quistis is known as a child prodigy around Balamb Garden. At the age of 15 she became a SeeD, and now at 18 is the youngest instructor in the Garden. She is less strict than the other instructors, leading some of her students to not take her seriously and to treat her with disrespect. Quistis tries to maintain her calm and due to her quiet assertiveness, stoic nature, and restraint, she mulls over her worries alone, kept at a distance from her pupils by her rank.
        `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616039204/quistis_profile.png',
      bioInfo: {
        occupation: 'Mercenary, Instructor',
        home: 'Balamb Garden',
        affiliation: 'SeeD',
      },
      physicalDetails: {
        gender: 'Female',
        height: `168 cm (5'6")`,
        race: 'Human',
        hairColor: 'Blonde',
        eyeColor: 'Blue',
        bloodType: 'A',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Blue Magic',
      weapon: 'Whip',
      ultimateWeapon: 'Save the Queen',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Miyuki Sawashiro',
            language: 'Japanese'
          },
          {
            name: 'Kristina Pesic',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'zell',
      name: 'Zell Dincht',
      description: `
        Zell Dincht is a playable character in Final Fantasy VIII. His loud and energetic personality is a foil to Squall's cold silence. Zell is a master of hand-to-hand combat and prefers to let his fists guide him out of situations his mouth cannot.

        Zell is short and has uniquely styled spiky blond hair and blue eyes. He wears a black vest with a red decor along the zipper, a black beater, baggy denim shorts, and black and red tennis shoes. While in Garden he at times wears the SeeD uniform or the SeeD cadet uniform, though he wears it with the sleeves rolled up and the jacket halfway unzipped, revealing a white t-shirt underneath. He has a black tribal tattoo on the left side of his face. The only time Zell doesn't wear his gloves is during the SeeD inauguration ball.

        Zell is the shortest of the three playable male characters. In the original release Quistis is taller than him, but in Final Fantasy VIII Remastered, his character model is now taller than hers.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616039850/zell_profile.png',
      bioInfo: {
        occupation: 'Mercenary',
        home: 'Balamb',
        affiliation: 'SeeD',
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Male',
        height: `165 cm (5'5")`,
        hairColor: 'Blonde',
        eyeColor: 'Blue',
        bloodType: 'B',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Great Gospel',
      weapon: 'Staves',
      ultimateWeapon: 'Princess Guard',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Tetsuya Nomura',
            language: 'Japanese'
          },
          {
            name: 'Masakazu Morita',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'selphie',
      name: 'Selphie Tilmitt',
      description: `
        Selphie Tilmitt is a playable character in Final Fantasy VIII. She is an active, outspoken and energetic girl who participates in many extracurricular activities, such as planning the Garden Festival and running a school website. She is clumsy, but despite this wields an oversized nunchaku in battle and pilots the Ragnarok airship. The player can read her website that gets updated throughout the game on the Balamb Garden Study Panel.
        Selphie most often wears a yellow overall dress with a clip at the front, a frontal zipper that travels the full length of the dress and two large back pockets. She wears a silver pendant, a blue strap on her left wrist and brown boots that reach mid-calf. As a cadet, Selphie wears the standard Balamb Garden uniform with knee-high socks and shoes. At the graduation ball after passing the SeeD exams, she wears the standard SeeD uniform with black knee high boots.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_414/v1616038343/selphie_profile.png',
      bioInfo: {
        occupation: 'Mercenary',
        home: 'Trabia Garden',
        affiliation: 'SeeD',
      },
      physicalDetails: {
        gender: 'Female',
        height: `156 cm (5'1")`,
        race: `Human`,
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Slot',
      weapon: 'Nunchaku',
      ultimateWeapon: 'Strange Vision',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Mayuko Aoki',
            language: 'Japanese'
          },
          {
            name: 'Molly Marlette',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'irvine',
      name: 'Irvine Kinneas',
      description: `
        Irvine Kinneas is a playable character in Final Fantasy VIII. An expert gunman known as the "best shooter in Garden", he is a consummate ladies' man whose reputation for cherishing the company of women is almost as well known as his accuracy with the gun. He is the last permanent member to join.

        Irvine wears his long brown hair in a ponytail and has blue eyes. He has a black cowboy hat, a purple vest, a long khaki-colored jacket, black fingerless gloves and brown chaps over black trousers with black boots. He wears gray earrings and a red and yellow beaded necklace.

        During the time the player takes control of Irvine at Fishermans Horizon, he's questioned by one of the locals as to why he keeps company with "warmongers". Irvine retorts he doesn't enjoy being a lone sniper, that he's felt alone all of his life in his battles against pressure, that he considers the team his saviors from loneliness and calls them comrades. This provides a rare insight on Irvine's views about life and friends.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616040821/irvine_profile.png',
      bioInfo: {
        home: 'Galbadia Garden',
        occupation: 'Mercenary, sniper',
        affiliation: "SeeD"
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Male',
        height: `183 cm (6'0")`,
        bloodType: 'A',
        hairColor: 'Ginger',
        eyeColor: 'Blue',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Shot',
      weapon: 'Shotgun',
      ultimateWeapon: 'Exeter',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
      }
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.selectedCharacter = this.characters.find(x => x.id === id);
  }

}
