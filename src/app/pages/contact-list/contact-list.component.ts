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
  letters: any[] = [];
  constructor(private http: HttpClient) {

    this.getJSON()

  }

  ngOnInit(): void {
  }
  public getJSON() {
    this.http.get(this._jsonURL).subscribe((content: any) => {
      content.data.forEach(e => {
        e.firstName = e.firstName.charAt(0).toUpperCase() + e.firstName.slice(1);
        if (this.letters.indexOf(e.firstName.charAt(0)) == -1) {
          this.letters.push(e.firstName.charAt(0));
        }
        if (!this.contents[this.letters.length - 1]) {
          this.contents[this.letters.length - 1] = {
            letter: this.letters[this.letters.length - 1],
            items: []
          }
        }
        this.contents[this.letters.length - 1].items.push(e)
      })
      console.log( this.contents)
    });
  }
}
