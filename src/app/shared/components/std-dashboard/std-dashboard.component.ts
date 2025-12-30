import { Component, OnInit } from '@angular/core';
import { StdService } from '../../services/std.service';
import { Istd } from '../../models/std';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StdFormComponent } from '../std-form/std-form.component';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  stdArr: Array<Istd> = []

  constructor(private _stdService: StdService,
              private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getData()
  }
  fetchData(){
    
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

  onEdit(std: Istd){
    const dialogConfi = new MatDialogConfig()
    dialogConfi.width = '400px'
    dialogConfi.maxWidth = '90%'
    dialogConfi.disableClose = true
    dialogConfi.data = std
    let dialogRef = this._matDialog.open(StdFormComponent,dialogConfi)
  }

}
