import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TimeAgoPipe } from '@core/pipes/timeago.pipe';

const pipes = [
  TimeAgoPipe,
];

const modules = [
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    CommonModule,
    ...modules,
  ],
  providers: [
  ],
  exports: [
    ...pipes,
    ...modules,
  ],
})
export class SharedModule { }
