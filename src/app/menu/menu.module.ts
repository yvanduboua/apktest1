import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

export const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'notes',
        loadChildren: () => import('../notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: 'aide',
        loadChildren: () => import('../aide/aide.module').then( m => m.AidePageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'moncompte',
        loadChildren: () => import('../moncompte/moncompte.module').then( m => m.MoncomptePageModule)
      },
      {
        path: 'emploiedetemps',
        loadChildren: () => import('../emploiedetemps/emploiedetemps.module').then( m => m.EmploiedetempsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'deconnection',
        loadChildren: () => import('../deconnection/deconnection.module').then( m => m.DeconnectionPageModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
