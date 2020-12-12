import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmploiedetempsPageRoutingModule } from './emploiedetemps-routing.module';

import { EmploiedetempsPage } from './emploiedetemps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmploiedetempsPageRoutingModule
  ],
  declarations: [EmploiedetempsPage]
})
export class EmploiedetempsPageModule {}
