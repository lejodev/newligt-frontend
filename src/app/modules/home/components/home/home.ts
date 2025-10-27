import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../../shared/interfaces/offer';
import { HttpService } from '../../../../core/seervices/http/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    
  }

  offers: Offer[] = []

}
