import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  private _jsonURL = 'assets/contacts.json';
  contents: any[] = [];
  li
  constructor(private http: HttpClient) {

    this.getJSON()

  }

  ngOnInit(): void {
  }
  public getJSON() {
    this.http.get(this._jsonURL).subscribe((content: any) => {
      this.contents = content.data
      // this.contents.forEach((e ,i)=> {
      //   if(e.firstName)
      // });
      this.contents.sort(function (a, b) {
      
        if (a.firstName < b.firstName) {

           console.log( a.firstName.charAt(0) )
           console.log(a.firstName)
          return -1;
        }
        if (a.firstName > b.firstName) { 
          console.log( a.firstName.charAt(0) )
          return 1; }
        return 0;
      });
    });
  }
}
