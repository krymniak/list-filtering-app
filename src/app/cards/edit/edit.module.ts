import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
	{
		path: '',
		component: EditComponent
	}
];


@NgModule({
	declarations: [
		EditComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule,
		EditComponent
	],
	providers: [],
	bootstrap: []
})
export class EditModule { }