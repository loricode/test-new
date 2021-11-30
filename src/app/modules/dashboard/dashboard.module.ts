import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { AeronaveComponent } from './pages/aeronave/aeronave.component';
import { ModalFormNaveComponent } from './components/modal-form-nave/modal-form-nave.component';
import { CoreModule } from '../core/core.module';

import { RoleDirective } from '../../directives/role.directive';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CardComponent,
    ListComponent,
    AeronaveComponent,
    ModalFormNaveComponent,
    RoleDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
