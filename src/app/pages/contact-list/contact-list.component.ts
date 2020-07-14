import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  private _jsonURL = 'assets/rcontact.json';
  contents: any[] = [];
  letters: any[] = [];
  data: any[] = [];
  searchItems: any[] = [];
  constructor(private http: HttpClient, private animateScrollService: NgAnimateScrollService) {

    this.getJSON()

  }
  navigateToHeader(contentList) {
    this.animateScrollService.scrollToElement(contentList, 1000)
  }
  ngOnInit(): void {
    console.log(this.searchItems.length)
  }

  searchBar(search) {
    console.log(search.target.value)
    if (search.target.value != '') {
      this.searchItems = this.data.filter(e => {
        let name = `${e.firstName.toLowerCase()}  ${e.lastName.toLowerCase()}`
        return name.indexOf(search.target.value.toLowerCase()) > -1;
      });
    } else {
      this.searchItems = [];
    }




  }
  public getJSON() {
    this.http.get(this._jsonURL).subscribe((content: any) => {
      // this.data = content.data;
    this.data = content.data.sort(function(a, b){
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;
    });
      this.data.forEach(e => {
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
      console.log(this.data)
    });
  }
}
