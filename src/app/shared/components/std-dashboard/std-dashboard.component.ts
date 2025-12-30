import { Component, OnInit } from '@angular/core';
import { StdService } from '../../services/std.service';
import { Istd } from '../../models/std';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  stdArr: Array<Istd> = []

  constructor(
    private _stdService: StdService,
    private matdialog : MatDialog,
    private _snackbar : SnackbarService
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

  Onremovestd(id:string){

    let config = new MatDialogConfig()
    config.width = "300px";
    config.disableClose = true;
    config.data = "are you sure, you want to remove this student";
  let matdialogRef=  this.matdialog.open(GetConfirmComponent,config);
      matdialogRef.afterClosed()
      .subscribe({
        next:res=>{
          if(res){
            this._stdService.RemoveStd(id)
            .subscribe({
              next:res=>{
               this._snackbar.onpenSnackbar(`the student with id ${res} is removed successfully!!!`)
              }
            })
          }
        }
      })
  }  
}
