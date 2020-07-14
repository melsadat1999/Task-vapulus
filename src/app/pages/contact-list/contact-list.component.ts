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
  constructor(private http: HttpClient) {

    this.getJSON()

  }

  ngOnInit(): void {
  }
  public getJSON() {
    this.http.get(this._jsonURL).subscribe((content: any) => {
      this.contents = content.data;
      console.log(this.contents)
    });
  }
}
