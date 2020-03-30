import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  @Input() people;

  constructor() { }

  ngOnInit(): void {
  }

}
