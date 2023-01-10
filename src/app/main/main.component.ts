import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interface';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

	list$!: Observable<User[]>

	constructor(
		private _service: ListService
	){

	}

	ngOnInit(): void {
		this.list$ = this._service.getList()
	}
}
