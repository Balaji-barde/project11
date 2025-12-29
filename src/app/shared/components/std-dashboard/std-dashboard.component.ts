import { Component, OnInit } from '@angular/core';
import { StdService } from '../../services/std.service';
import { Istd } from '../../models/std';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  stdArr: Array<Istd> = []

  constructor(private _stdService: StdService) { }

  ngOnInit(): void {

    this.getData()
  }


  getData(){
    this._stdService.fetchStdData().subscribe({
      next: res => {
        console.log(res);
        this.stdArr = res
      },
      error: err => {
        console.log(err);

      }
    })
  }

}
