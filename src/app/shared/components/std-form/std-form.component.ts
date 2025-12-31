import { StdService } from '../../services/std.service';
import { UuidService } from '../../services/uuid.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Istd } from '../../models/std';
import { NgForm } from '@angular/forms';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss'],
})
export class StdFormComponent implements OnInit {
  @ViewChild('formRef') stdform!: NgForm;
  isIneditmode: boolean = false;
stdObj ! : Istd;
 ngOnInit(): void {
    this.fetch()
  }
  fetch(){
    if(this.stdObj){
      setTimeout(()=>{
        this.stdform.form.patchValue(this.stdObj)
      },0)
    }
  }


  constructor(private _stdService : StdService,
     private _uuidservice: UuidService,
              private _matDialog : MatDialogRef<StdFormComponent>,
              @Inject(MAT_DIALOG_DATA) getStd : Istd,
              private _snackBar : SnackBarService
  ) { this.stdObj = getStd}


  onsubmit() {
    if (this.stdform.valid) {
      let obj = { ...this.stdform.value, stdid: this._uuidservice.uuid() };
      console.log(obj);
      this._stdService.createStd(obj).subscribe({
        next: (res) => {
          console.log(res);
          this._snackBar.snackBar(`The Student Added  SuccesFully..!!`)
          this._matDialog.close()
          this.stdform.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
 
  }
  onClose(){
    this._matDialog.close()
  }
  onUpdate() {
    let obj = {
      ...this.stdform.value,
      id : this.stdObj.id
    }
    this._stdService.updateStd(obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('Student details is updated successfully!!!')
          this.isIneditmode = true;
          this.stdform.reset()
          this._matDialog.close()
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }
}

