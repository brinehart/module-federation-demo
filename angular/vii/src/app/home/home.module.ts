import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { CharactersDisplayComponent } from '../home/characters-display/characters-display.component';
import { CharactersListComponent } from '../home/characters-list/characters-list.component';
import { CardsListComponent } from '../home/cards-list/cards-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CharactersDisplayComponent,
    CharactersListComponent,
    CardsListComponent
  ],
  imports: [
    HomeRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
