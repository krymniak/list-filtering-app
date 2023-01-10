import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./interface";

@Injectable({providedIn:'root'})

export class ListService {
	constructor(
		private _http: HttpClient
	){}

	getList(): Observable<User[]> {
		return this._http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
	}

	getById(id: string): Observable<User> {
		return this._http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
	}
}