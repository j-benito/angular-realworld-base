import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'hammerjs';
import { AppMaterialModule } from 'src/app/shared/modules/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    AppMaterialModule
  ]
})
export class SharedModule { }
