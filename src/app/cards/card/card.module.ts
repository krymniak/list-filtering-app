import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';



@NgModule({
	declarations: [
		CardComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		CardComponent
	],
	providers: [],
	bootstrap: []
})
export class CardModule { }