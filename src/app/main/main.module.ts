import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../cards/card/card.module';
import { CardComponent } from '../cards/card/card.component';
import { MainComponent } from './main.component';
const routes: Routes = [
	{
		path: '',
		component: MainComponent
	}
];

@NgModule({
	declarations: [
		MainComponent,
	],
	imports: [
		CommonModule,
		CardModule,
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
	providers: [],
	bootstrap: []
})
export class MainModule { }