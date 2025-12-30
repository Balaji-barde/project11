import { Component, OnInit, ViewChild } from '@angular/core';
import { StdService } from '../../services/std.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UuidService } from '../../services/uuid.service';
import { Istd } from '../../models/std';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss'],
})
export class StdFormComponent implements OnInit {
  @ViewChild('stdform') stdform!: NgForm;
  isIneditmode: boolean = false;


  constructor(
    private _stdservice: StdService,
    private _uuidservice: UuidService,
    private _matdailogref:MatDialogRef<StdFormComponent>,
    private _snackbarserive:SnackbarService
  ) {}

  ngOnInit(): void {}

  onsubmit() {
    if (this.stdform.valid) {
      let obj = { ...this.stdform.value, stdid: this._uuidservice.uuid() };
      console.log(obj);
      this._stdservice.createStd(obj).subscribe({
        next: (res) => {
          console.log(res);
          this._snackbarserive.opensnackbar(`The Student Added  SuccesFully..!!`)
          this._matdailogref.close()
          this.stdform.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
