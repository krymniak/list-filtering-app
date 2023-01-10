import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() list!: User
}
