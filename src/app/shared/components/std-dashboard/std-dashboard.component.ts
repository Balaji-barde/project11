import { Component, OnInit } from '@angular/core';
import { StdService } from '../../services/std.service';
import { Istd } from '../../models/std';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { StdFormComponent } from '../std-form/std-form.component';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  stdArr: Array<Istd> = []

  constructor(private _stdService: StdService,
    private _matdailog:MatDialog
  ) { }

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

  onadd(){
    let config=new MatDialogConfig()
    config.width='400px',
    config.disableClose=true
let MatDialogref= this._matdailog.open(StdFormComponent,config)
    MatDialogref.afterClosed().subscribe({
      next:res=>{
        console.log(res);
        
      },
    })
  }

}
