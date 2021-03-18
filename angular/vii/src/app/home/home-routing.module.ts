import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharactersDisplayComponent } from './characters-display/characters-display.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CardsListComponent } from './cards-list/cards-list.component';

const routes: Routes = [
  {
    path: 'characters/:id',
    component: CharactersDisplayComponent
  },
  {
    path: 'characters',
    component: CharactersListComponent
  },
  {
    path: '',
    component: CardsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
