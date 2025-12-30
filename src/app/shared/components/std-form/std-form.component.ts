import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { StdService } from '../../services/std.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Istd } from '../../models/std';
import { NgForm } from '@angular/forms';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  isEditMode : boolean = false
  stdObj ! : Istd
  @ViewChild('formRef') formRef ! : NgForm
  constructor(private _stdService : StdService,
              private _matDialog : MatDialogRef<StdFormComponent>,
              @Inject(MAT_DIALOG_DATA) getStd : Istd,
              private _snackBar : SnackBarService
  ) { this.stdObj = getStd}

  ngOnInit(): void {
    this.fetch()
  }
  fetch(){
    this.isEditMode = true
    if(this.stdObj){
      setTimeout(()=>{
        this.formRef.form.patchValue(this.stdObj)
      },0)
    }
  }
  onClose(){
    this._matDialog.close()
  }
  onUpdate(){
    let obj = {
      ...this.formRef.value,
      id : this.stdObj.id
    }
    this._stdService.updateStd(obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('Student details is updated successfully!!!')
          this.isEditMode = false;
          this.formRef.reset()
          this._matDialog.close()
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }

}
