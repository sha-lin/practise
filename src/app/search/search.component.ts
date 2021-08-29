import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public userQuery!: string;
  @Output() searchResult = new EventEmitter<any>()
  constructor() {
   
  }

  searchUser(){
    this.searchResult.emit(this.userQuery);
  }
  ngOnInit(): void {
  }

}

