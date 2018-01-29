import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule, } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material'; // not needed starting from AM 5.0

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
    MatInputModule, MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule
  ]
//  providers: [ { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }]

})
export class AuctionMaterialModule { }