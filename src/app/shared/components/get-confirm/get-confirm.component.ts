import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
    mesg!:string
  constructor(
    private _matDialogRef : MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data :string
  ) { 
    this.mesg  = data
  }

  ngOnInit(): void {
  }

  onclose(flag:boolean){
    this._matDialogRef.close(flag)
  }
}
