import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
	},
	{
		path: 'card/:id', loadChildren: () => import('./cards/edit/edit.module').then(m => m.EditModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		preloadingStrategy: PreloadAllModules
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }

