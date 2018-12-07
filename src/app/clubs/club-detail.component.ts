import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IClubs } from './clubs';

@Component({
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
	pageTitle: string ="Szczegóły klubu";
	product: IClubs;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	let id = +this.route.snapshot.paramMap.get('id');
  	this.pageTitle += `: ${id}`;
  		this.product = {
        "clubId": 1,
        "clubName": "Bayern Monachium",
        "clubStadium": "Allianz Arena",
        "clubStart": "27.02.1900",
        "clubBudget": 262000000,
        "starRating": 3.2,
        "imageUrl": "../../assets/images/bayern.jpg"
	  }
  }

}
