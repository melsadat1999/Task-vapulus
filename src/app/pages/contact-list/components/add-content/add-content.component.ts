import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddContentComponent>) { }
  // this.dialogRef.close(res);
  ngOnInit(): void {
  }
  
}
