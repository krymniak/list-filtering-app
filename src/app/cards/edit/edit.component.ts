import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/interface';
import { ListService } from 'src/app/shared/list.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

	pSub!: Subscription
	user!: User

	form!: FormGroup
  id!: string
  isEditDisable = true

	constructor(
		private _route: ActivatedRoute,
		private _service: ListService
	) { }

	ngOnInit() {
		this.createForm()
    this.id = this._route.snapshot.params['id']
    this.getUserById()
	}

	private createForm() {
    this.form = new FormGroup({
      name: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      username: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      email: new FormControl({ value: '', disabled: this.isEditDisable }, [
        Validators.email, Validators.required
      ]),
      street: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      city: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      zipcode: new FormControl({ value: '', disabled: this.isEditDisable }, []),
      phone: new FormControl({ value: '', disabled: this.isEditDisable }, [
        Validators.required
      ]),
      website: new FormControl({ value: '', disabled: this.isEditDisable }, [
        Validators.required
      ]),
      comment: new FormControl({ value: '', disabled: this.isEditDisable }, [])
    })
  }

	private getUserById(): void {
    this.pSub = this._service.getById(this.id).subscribe(response => {
			console.log(response)
      this.form.patchValue({
        name: response.name,
        username: response.username,
        email: response.email,
        city: response.address.city,
        street: response.address.street,
        zipcode: response.address.zipcode,
        phone: response.phone,
        website: response.website
      })
    })
  }

	edit() {
    this.isEditDisable = !this.isEditDisable
    if (this.isEditDisable) {
      this.form.disable()
    } else {
      this.form.enable()
    }
  }

	submit() {
    const user: User = {
      name: this.form.value.name,
      username: this.form.value.username,
      email: this.form.value.email,
      address: {
        city: this.form.value.city,
        street: this.form.value.street,
        zipcode: this.form.value.zipcode
      },
      phone: this.form.value.phone,
      website: this.form.value.website,
      comment: this.form.value.comment
    }

    console.log('User', user);
  }


	ngOnDestroy(): void {
		if(this.pSub) {
			this.pSub.unsubscribe()
		}
	}
}
