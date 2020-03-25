import { Component, OnInit } from '@angular/core';
import {PersonService} from "../_services/person.service";
import {Person} from "../_pojo/person";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people;

  constructor(private personService: PersonService) { }


  ngOnInit(): void {

    this.personService.getAllPeople().subscribe( data => {
      this.people = data;
      console.log(data);
    });


    console.log("--------------");

  }

}
