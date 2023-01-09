import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
		MainComponent
  ],
  imports: [
		CommonModule,
		RouterModule.forChild(routes)
  ],
	exports: [
		MainComponent,
		RouterModule
	],
  providers: [],
  bootstrap: []
})
export class MainModule { }