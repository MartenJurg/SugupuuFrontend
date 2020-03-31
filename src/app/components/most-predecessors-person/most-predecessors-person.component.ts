import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../_services/person.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-most-predecessors-person',
  templateUrl: './most-predecessors-person.component.html',
  styleUrls: ['./most-predecessors-person.component.css']
})
export class MostPredecessorsPersonComponent implements OnInit {

  constructor(private personService: PersonService,
              private router: Router) { }

  person;
  personId = "";
  firstName = "";
  lastName = "";
  age = "";
  gender = "";

  ngOnInit(): void {
    this.personService.getPersonWithMostPredecessors().subscribe( data => {
      console.log(data);
      this.person = data;
      this.personId = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.age = data.age;
      this.gender = data.gender;
    })
  }

  navigateToPredecessors(event) {

    this.router.navigate(["/predecessors/" + this.personId])
  }

}
