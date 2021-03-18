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
      id: 'cloud',
      name: 'Cloud Strife',
      description: `
        Cloud Strife is the main protagonist in Final Fantasy VII, Final Fantasy VII Remake, and Final Fantasy VII: Advent Children. He also appears in the spin-off games of the Compilation of Final Fantasy VII as a supporting character, including Dirge of Cerberus -Final Fantasy VII- and Crisis Core -Final Fantasy VII-.

        An arrogant and proud swordsman at first, Cloud introduces himself to Avalanche as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. Beneath his hardened outer persona is a softer, more caring individual who simply struggles to open up, but is striving to be a hero. Cloud later discovers more about his past and, with the help of his friends, learns there is more to being a hero than possessing physical strength and fame. He develops compassion for the planet and the people he fights to protect from the Shinra Electric Power Company and his nemesis, Sephiroth.

        Cloud Strife wields large broadswords in battle, including the iconic Buster Sword, and is a versatile melee combatant. In Final Fantasy VII, he has access to the most powerful weapons in the game, as well as the strongest Limit abilities (all of which involve his sword), though they take the longest to learn.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616035907/cloud_strife_profile.png',
      bioInfo: {
        occupation: 'Mercenary(Former Shinra Infantryman), Courier',
        home: 'Nibelheim',
        affiliation: 'Shinra Electric Power Company / Avalanche',
      },
      physicalDetails: {
        gender: 'Male',
        height: `173 cm (5'8")`,
        race: 'Human',
        hairColor: 'Blond',
        eyeColor: 'Blue',
        bloodType: 'AB',
        laterality: 'Right-Handed',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Omnislash',
      weapon: 'Broadswords',
      ultimateWeapon: 'Ultimate Weapon',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Takahiro Sakurai',
            language: 'Japanese'
          },
          {
            name: 'Steve Burton',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'barret',
      name: 'Barret Wallace',
      description: `
        Barret Wallace is a playable character in Final Fantasy VII and Final Fantasy VII Remake, and a major recurring character in the Compilation of Final Fantasy VII. He is the leader of a cell of the eco-terrorist group Avalanche, trying to prevent Shinra Electric Power Company from using mako, the life source of the planet, as a form of energy.

        Barret fights passionately for his cause to protect the planet. He cares greatly for his allies, motivating them with powerful speeches, while also himself fighting on the front lines of his cell's operations. His seemingly benevolent cause of fighting for the planet is a cover for his personal vendetta and anger, which he later must come to terms with. Despite his brash and sometimes violent attitude, Barret has a good heart, and is torn between fighting and caring for his daughter, Marlene.

        Barret wields a gun-arm, a mechanical gun grafted in place of his right arm, allowing him to fire from range. His Limit Break abilities largely consist of physical attacks with these weapons. Barret has high HP, allowing him to fill the role of taking damage from other party members.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616038737/barret_wallace_profile.png',
      bioInfo: {
        occupation: 'Leader in Avalanche',
        home: 'Corel',
        affiliation: 'Avalanche',
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Male',
        height: `197 cm (6'6")`,
        hairColor: 'Black',
        eyeColor: 'Brown',
        bloodType: 'O',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Catastrophe',
      weapon: 'Gun-arms',
      ultimateWeapon: 'Missing Score',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Masahiro Kobayashi',
            language: 'Japanese'
          },
          {
            name: 'Beau Billingslea',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'tifa',
      name: 'Tifa Lockhart',
      description: `
        Tifa Lockhart is a playable character in Final Fantasy VII and Final Fantasy VII Remake, She also plays a supportive role in Final Fantasy VII: Advent Children, Dirge of Cerberus -Final Fantasy VII- and Crisis Core -Final Fantasy VII-. She is a friend of Cloud Strife, and a member of the resistance group Avalanche.

        Tifa grew up with Cloud in Nibelheim, but lost contact with him years ago. When she meets him again, she convinces him to join Avalanche to fight the Shinra Electric Power Company, whom she bears hatred for due to the destruction of their hometown. She supports Cloud as his comrade and helps him and his allies fight Sephiroth. Tifa is reserved and empathic, acting as a motherly figure towards her allies when providing encouragement and emotional support. She also serves as the voice of reason grounding them to think things through and do the right thing.

        In contrast to her shy personality, Tifa has a vigorous combat style, fighting with her fists. Trained by Zangan, she uses martial arts skills to fight opponents up close, and equips knuckles as her weapons. In the original Final Fantasy VII, unlike other characters, her Limit abilities, each a different martial arts technique, are not selected from a list, rather, each ability can be used consecutively if the slots land on the "Yeah!" reel for the ability. Tifa has a similar role in Final Fantasy VII Remake as an agile close combat fighter making use of powerful techniques in battle, with a unique ability based on her Unbridled Strength chi level.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616039204/tifa_lockhart_profile.png',
      bioInfo: {
        occupation: 'Bar hostess, Avalanche member',
        home: 'Nibelheim',
        affiliation: 'Avalanche',
      },
      physicalDetails: {
        gender: 'Female',
        height: `167 cm (5'6")`,
        race: 'Human',
        hairColor: 'Brown',
        eyeColor: 'Brown',
        bloodType: 'B',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Final Heaven',
      weapon: 'Knuckles',
      ultimateWeapon: 'Premium Heart',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Ayumi Ito',
            language: 'Japanese'
          },
          {
            name: 'Rachael Leigh Cook',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'aerith',
      name: 'Aerith Gainsborough',
      description: `
        Aerith Gainsborough, alternately known with the first name Aeris, is a playable character in Final Fantasy VII and Final Fantasy VII Remake. She is a major character in the Compilation of Final Fantasy VII, appearing in Final Fantasy VII: Advent Children, Crisis Core -Final Fantasy VII- and Before Crisis -Final Fantasy VII-.

        Aerith is the last of the Cetra, an ancient race with powerful magical abilities, and so the Shinra Electric Power Company hunts her throughout her life, seeking to exploit her powers. She meets Cloud Strife in Midgar, and the two become close, leading her to join his quest to fight Shinra and hunt down Sephiroth. Aerith is upbeat, carefree, and joyful, being flirtatious towards Cloud and compassionate towards others.

        Aerith wields staves in battle, and is in the back row by default, as she primarily uses magic from equipped Materia in battle. Her Limit abilities are defensive, either providing restorative powers, healing other party members, or bestowing status enhancements.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616039850/aerith_gainsborough_profile.png',
      bioInfo: {
        occupation: 'Flower Merchant',
        home: 'Icicle Inn',
      },
      physicalDetails: {
        gender: 'Female',
        height: `163 cm (5'4")`,
        race: 'Half-Cetra/Human',
        hairColor: 'Brown',
        eyeColor: 'Green',
        bloodType: 'O',
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Great Gospel',
      weapon: 'Staves',
      ultimateWeapon: 'Princess Guard',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Maaya Sakamoto',
            language: 'Japanese'
          },
          {
            name: 'Briana White',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'red-xiii',
      name: 'Red XIII',
      description: `
      Red XIII, real name Nanaki, is a red lion or wolf-like beast and one of the playable characters in Final Fantasy VII. He also appears in other entries of the Final Fantasy VII series. He is a guest in Final Fantasy VII Remake. Red XIII is the only quadrupedal playable character in the main Final Fantasy series so far.

      Red XIII is the name he received as a specimen designation while held captive and experimented upon by Professor Hojo, and remains the name he is called by the party and in battle in Final Fantasy VII. Although he is 48 years old, he is developmentally equivalent to a 15- or 16-year-old human by his long-lived species' standards. He fights alongside Cloud Strife and his allies to fulfill his duty to the planet to defend it as a warrior.

      Red XIII uses headdresses to enhance his damage. His earlier Limit abilities augment his stats by adding positive status effects, but his later abilities deal physical attacks to enemies based on his own damage.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_414/v1616038343/red_xiii_profile.png',
      bioInfo: {
        occupation: 'Beast, Research Specimen',
        home: 'Cosmo Canyon',
      },
      physicalDetails: {
        gender: 'Male',
        height: `120 cm (3'9")`,
        race: `Red XIII's Species`,
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Cosmo Memory',
      weapon: 'Headdresses',
      ultimateWeapon: 'Limited Moon',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Kappei Yamaguchi',
            language: 'Japanese'
          },
          {
            name: 'Max Mittelman',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'cait-sith',
      name: 'Cait Sith',
      description: `
        Cait Sith is a playable character in Final Fantasy VII and Dirge of Cerberus -Final Fantasy VII-, also appearing in Crisis Core -Final Fantasy VII- as a summon, and in a small role in Before Crisis -Final Fantasy VII- and Final Fantasy VII: Advent Children. He is a cat riding a giant stuffed toy moogle, initially working as a fortune-teller in the Gold Saucer. Cait Sith's character and motives for joining Cloud's party are initially a mystery.

        Cait Sith uses megaphones to give orders to his moogle. Unlike most characters, Cait Sith only has two Limit abilities: Dice and Slots. Dice throws a number of dice down (based on his level), and deals damage depending on the result. Slots can have a variety of effects based on the result of a slot reel that either boost allies' power or damage enemies, in which the best combination kills all enemies instantly (even those with immunity to Instant Death spells), while the worst will kill all allies ending in a Game Over.

        Cait Sith makes a cameo in Final Fantasy VII Remake and is expected to appear in the future parts of the project.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/c_scale,w_300/v1616014427/cait_sith_profile.png',
      bioInfo: {
        occupation: 'Toysaurus, Spy'
      },
      physicalDetails: {
        gender: 'Unknown',
        height: `100 cm (3'4")`
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Slots',
      weapon: 'Megaphones',
      ultimateWeapon: 'HP Shout',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Hideo Ishikawa',
            language: 'Japanese'
          },
          {
            name: 'Greg Ellis',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'cid',
      name: 'Cid Highwind',
      description: `
        Cid Highwind is a playable character in Final Fantasy VII who also appears in the titles of the Compilation of Final Fantasy VII. He is part of a long tradition of Final Fantasy characters named Cid, and owns an airship, the Highwind.

        Cid is a former mechanical scientist who has an unfulfilled dream of sending a rocket to space. Cid mistrusts the Shinra Electric Power Company, and when one of its executives attempt to steal his plane, the Tiny Bronco, he joins Cloud and his allies to fight Shinra. Cid is the most uncouth of the protagonists: he swears, is short-tempered, and chain-smokes cigarettes. However, he has a good heart, and is voted as a temporary party leader during Cloud and Tifa's absence.

        Cid wields spears in battle, and his Limit abilities make use of him jumping and landing on enemies with his spear to hit multiple enemies, or hit enemies multiple times, potentially dealing devastating damage.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616040821/cid_highwind_profile.png',
      bioInfo: {
        home: 'Rocket Town',
        occupation: 'Pilot, Airship Captain'
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Male',
        height: `178 cm (5'10")`,
        bloodType: 'B'
      },
      type: 'Player Character',
      ultimateLimitBreak: 'Highwind',
      weapon: 'Spears',
      ultimateWeapon: 'Venus Gospel',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Kazuhiro Yamaji',
            language: 'Japanese'
          },
          {
            name: 'Chris Edgerly',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'yuffie',
      name: 'Yuffie Kisaragi',
      description: `
        Yuffie Kisaragi is an optional playable character in Final Fantasy VII, and the main playable character of an additional episode introduced in Final Fantasy VII Remake Intergrade. She is a Ninja and a Thief, wielding a large shuriken.

        Yuffie is a Materia hunter encountered in various forests on the Planet. As a rebellious and cocky tomboy, she desires to restore her homeland Wutai to the glorious nation it was before being conquered by the Shinra Electric Power Company. Despite her obnoxious personality, Yuffie is friendly, helpful, optimistic and willingly helps the party in their battles.

        Yuffie is one of two optional characters along with Vincent Valentine. As such, she has almost no impact on the game's main storyline, but there are some changes made to various scenes if she is recruited. She can join after being discovered in various forests after the events at the Mythril Mine, encountered as the Mystery Ninja. She wields shurikens in battle for ranged attacks, and her Limits usually involve her hitting multiple enemies at once.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616040821/yuffie_kisaragi_profile.png',
      bioInfo: {
        home: 'Wutai',
        occupation: 'Materia Hunter, Ninja'
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Female',
        height: `160 cm (5'2")`,
        bloodType: 'A'
      },
      type: 'Optional Player Character',
      ultimateLimitBreak: 'All Creation',
      weapon: 'Shuriken',
      ultimateWeapon: 'Conformer',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Yumi Kakazu',
            language: 'Japanese'
          },
          {
            name: 'Mae Whitman',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'vincent',
      name: 'Vincent Valentine',
      description: `
      Vincent Valentine is an optional playable character in Final Fantasy VII, and the main protagonist of Dirge of Cerberus -Final Fantasy VII-. A former Turk with a mysterious past, Vincent's secrets tie him directly to several of the Final Fantasy VII series's main antagonists.

      Vincent wields handguns in battle. His Limit Breaks cause him to shapeshift as a result of the experiments Professor Hojo performed on him. When he transforms, his stats increase and he gains new powerful attacks, but becomes uncontrollable until the battle ends or until he falls into Death status.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616040821/vincent_valentine_profile.png',
      bioInfo: {
        occupation: 'Vampire?'
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Male',
        height: `184 cm (6'0")`,
        bloodType: 'A'
      },
      type: 'Optional Player Character',
      ultimateLimitBreak: 'Chaos',
      weapon: 'Guns',
      ultimateWeapon: 'Death Penalty',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Kazuhiro Nakata',
            language: 'Japanese'
          },
          {
            name: 'Steve Blum',
            language: 'English'
          },
        ]
      }
    },
    {
      id: 'sephiroth',
      name: 'Sephiroth',
      description: `
        Sephiroth is the main antagonist of Final Fantasy VII and Final Fantasy VII Remake and one of the major antagonists in its extended universe. In spin-off appearances, Sephiroth is depicted as Cloud Strife's archenemy and is seen as a symbol of Cloud's troubled past that haunts him. Sephiroth is a former renowned SOLDIER who became twisted.

        Before his fall from grace, Sephiroth was one of the most lauded success stories of the Shinra Electric Power Company's SOLDIER program. His successes in the field of battle during the conflicts surrounding Shinra's bid for global domination led to his status as a celebrity war hero and the poster boy for both the Shinra Military and the company's SOLDIER program. Learning of his true origins drove him insane, causing him to be driven by a desire to destroy the world.

        Sephiroth is briefly a party member during a flashback in the original Final Fantasy VII, and is both the penultimate and final boss.
      `,
      image: 'https://res.cloudinary.com/brinehart/image/upload/h_600/v1616040821/sephiroth_profile.png',
      bioInfo: {
        occupation: 'SOLDIER 1st Class',
        home: 'Nibelheim'
      },
      physicalDetails: {
        race: 'Human',
        gender: 'Male',
        height: `185 cm (6'1")`,
        hairColor: 'Silver',
        eyeColor: 'Green',
        laterality: 'Left-Handed',
      },
      type: 'Guest Character',
      weapon: 'Masamune',
      creatorInfo: {
        designer: 'Tetsuya Nomura',
        voiceActors: [
          {
            name: 'Toshiyuki Morikawa',
            language: 'Japanese'
          },
          {
            name: 'Tyler Hoechlin',
            language: 'English'
          },
        ]
      }
    },
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.selectedCharacter = this.characters.find(x => x.id === id);
  }

}
