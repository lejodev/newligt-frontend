import { Component } from '@angular/core';
import { Offer } from '../../../../shared/interfaces/offer';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  offers: Offer[] = []

}
