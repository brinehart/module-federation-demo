import { SafeUrl } from '@angular/platform-browser';

export interface Game {
  name: string;
  image: SafeUrl;
  description: string;
  link: string;
}
