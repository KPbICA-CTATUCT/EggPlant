import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  records: number = 0;
  shown: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onRecordsChange($event) {
    this.records = $event;
  }

  onShownChange($event) {
    this.shown = $event; 
  }
}
