import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'vii',
    loadChildren: () => loadRemoteModule({
      remoteName: 'vii',
      exposedModule: './Module'
    }).then(m => m.HomeModule)
  },
  {
    path: 'viii',
    loadChildren: () => loadRemoteModule({
      remoteName: 'viii',
      exposedModule: './Module'
    }).then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
