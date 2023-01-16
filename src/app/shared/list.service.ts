import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { User } from "./interface";

@Injectable({providedIn:'root'})

export class ListService {

	lists$ = new BehaviorSubject<User[]>([])
	constructor(
		private _http: HttpClient
	){}

	getList(): Observable<User[]> {
		return this._http.get<User[]>(`https://jsonplaceholder.typicode.com/users`).pipe(
			map((list: User[]) => {
				this.lists$.next(list)
				return list
			})
		)
	}

	getById(id: string): Observable<User> {
		return this._http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
	}
}