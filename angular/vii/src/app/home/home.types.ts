import { SafeUrl } from '@angular/platform-browser';

export interface Card {
  name: string;
  image: SafeUrl;
  description: string;
  link: string;
}

export interface Character {
  id: string;
  name: string;
  description: string;
  image: SafeUrl;
  bioInfo: {
    home?: string;
    affiliation?: string;
    occupation: string;
  };
  physicalDetails: {
    race?: string;
    gender: string;
    height: string;
    hairColor?: string;
    eyeColor?: string;
    bloodType?: string;
    laterality?: string;
  };
  type: string;
  ultimateLimitBreak?: string;
  weapon: string;
  ultimateWeapon?: string;
  creatorInfo: {
    designer: string;
    voiceActors: VoiceActor[];
  };
}

export interface VoiceActor {
  name: string;
  language: string;
}
