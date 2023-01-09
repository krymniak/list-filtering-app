import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { CardComponent } from './card.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent
  }
];


@NgModule({
  declarations: [
		CardComponent,
		EditComponent
  ],
  imports: [
		CommonModule,
		RouterModule.forChild(routes)
  ],
	exports: [
		CardComponent,
		RouterModule,
		EditComponent
	],
  providers: [],
  bootstrap: []
})
export class CardModule { }