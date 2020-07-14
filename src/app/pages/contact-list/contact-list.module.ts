import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import {MatDialogModule} from '@angular/material/dialog';
import { AddContentComponent } from './components/add-content/add-content.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  { path: '', component: ContactListComponent }
]


@NgModule({
  declarations: [ContactListComponent, AddContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],entryComponents:[AddContentComponent]
})
export class ContactListModule { }
