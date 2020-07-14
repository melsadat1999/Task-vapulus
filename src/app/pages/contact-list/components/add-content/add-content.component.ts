import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  addContact: FormGroup;
  keysnumber: any[] = [];
  private _jsonURL = 'assets/KeyNumber.json';
  imagePath:any;
  imgURL:any;
  constructor(public dialogRef: MatDialogRef<AddContentComponent>, fb: FormBuilder, private http: HttpClient) {
    this.addContact = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      StateKey: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  //preview img
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  ngOnInit(): void {
    this.http.get(this._jsonURL).subscribe((Keys: any) => {
      console.log(Keys)
      this.keysnumber = Keys
    })
  }
  // add Contact Itam
  addContactItam() {
    if (this.addContact.valid) {
      console.log(this.addContact.value)
      this.dialogRef.close({
        ...this.addContact.value,
        image:this.imgURL
      });
    }
  }
  close(){
    this.dialogRef.close();
  }
}
