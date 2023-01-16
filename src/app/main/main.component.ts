import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/interface';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

	list$!: Observable<User[]>
	lSub!: Subscription
	constructor(
		private _service: ListService
	){

	}

	ngOnInit(): void {
		this.lSub = this._service.getList().subscribe()
		this.list$ = this._service.lists$.asObservable()
	}

ngOnDestroy(): void {
	if (this.lSub) {
		this.lSub.unsubscribe()
	}
}

sortByCity() {
	this._service.lists$.getValue()
	.sort((a, b) => (a.address.city > b.address.city) ? 1 : -1)
}

sortByCompany() {
	this._service.lists$.getValue()
	.sort((a, b) => (a.company!.name > b.company!.name) ? 1 : -1)
}

}
