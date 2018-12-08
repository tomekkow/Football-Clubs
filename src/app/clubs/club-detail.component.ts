import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IClubs } from './clubs';
import { ClubService } from './club.service'

@Component({
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
  pageTitle: string ="Szczegóły klubu";
  errorMessage = '';
	club: IClubs | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clubService: ClubService) { }

  ngOnInit() {
  	const param = this.route.snapshot.paramMap.get('id');
  	if(param) {
      const id = +param;
      this.getClub(id);
    }
  }

  getClub(id: number) {
    this.clubService.getClub(id).subscribe(
      club => this.club = club,
      error => this.errorMessage = <any>error
    )
  }

  onBack(): void {
    this.router.navigate(['/clubs'])
  }
}
