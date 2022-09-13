import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactListComponent } from './contact-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ContactListRoutingModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class ContactListModule { }
