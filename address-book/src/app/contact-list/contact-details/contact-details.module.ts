import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    ContactDetailsRoutingModule,
    MatListModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ]
})
export class ContactDetailsModule { }
