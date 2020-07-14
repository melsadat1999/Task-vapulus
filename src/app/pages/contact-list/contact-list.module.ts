import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: ContactListComponent }
]


@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatDialogModule
  ]
})
export class ContactListModule { }
