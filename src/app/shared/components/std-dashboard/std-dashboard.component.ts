import { Component, OnInit } from '@angular/core';
import { StdService } from '../../services/std.service';
import { Istd } from '../../models/std';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StdFormComponent } from '../std-form/std-form.component';
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

  onadd(){
    let config=new MatDialogConfig()
    config.width='400px',
    config.disableClose=true
let MatDialogref= this.matdialog.open(StdFormComponent,config)
  }

  onEdit(std: Istd){
    const dialogConfi = new MatDialogConfig()
    dialogConfi.width = '400px'
    dialogConfi.maxWidth = '90%'
    dialogConfi.disableClose = true
    dialogConfi.data = std
    let dialogRef = this.matdialog.open(StdFormComponent,dialogConfi)
  }


  

 
  //   config.width = "300px";
  //   config.disableClose = true;
  //   config.data = "are you sure, you want to remove this student";
  // let matdialogRef=  this.matdialog.open(GetConfirmComponent,config);
  //     matdialogRef.afterClosed()
  //     .subscribe({
  //       next:res=>{
  //         if(res){
  //           this._stdService.RemoveStd(id)
  //           .subscribe({
  //             next:res=>{
  //              this._snackbar.onpenSnackbar(`the student with id ${res} is removed successfully!!!`)
  //             }
  //           })
  //         }
  //       }
  //     })
  // }  

  onRemove(id: string) {
  let config = new MatDialogConfig();
  config.width = "300px";
  config.disableClose = true;
  config.data = "Are you sure you want to remove this student?";

  let dialogRef = this.matdialog.open(GetConfirmComponent, config);

  dialogRef.afterClosed().subscribe({
    next: res => {
      if (res) {
        this._stdService.RemoveStd(id).subscribe({
          next: () => {
            this._snackbar.onpenSnackbar(
              `Student removed successfully!`
            );
            this.getData(); 
          }
        });
      }
    }
  });
}

}
