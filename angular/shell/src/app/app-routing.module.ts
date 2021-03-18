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
      remoteEntry: 'http://localhost:7000/remoteEntry.js',
      remoteName: 'vii',
      exposedModule: './Module'
    }).then(m => m.HomeModule)
  },
  {
    path: 'viii',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:8000/remoteEntry.js',
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
