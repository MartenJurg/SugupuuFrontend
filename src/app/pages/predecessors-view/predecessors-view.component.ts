import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {PersonService} from "../../_services/person.service";
import {Person} from "../../_pojo/person";

@Component({
  selector: 'app-predecessors-view',
  templateUrl: './predecessors-view.component.html',
  styleUrls: ['./predecessors-view.component.css']
})
export class PredecessorsViewComponent implements OnInit {

  constructor(private router: Router,
              private personService: PersonService,
              private route: ActivatedRoute) { }
  firstName = "";
  lastName = "";
  count = 0;
  personId;
  peopleList;
  person;

  ngOnInit(): void {
    this.personId = this.route.snapshot.params.id;

    this.getPredecessors();
    this.getPersonData()
  }

  getPersonData() {
    this.personService.getPersonById(this.personId).subscribe( data => {
      if (data == null) {
        this.router.navigate([""])
      } else {
        this.person = data;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
      }
    })
  }

  getPredecessors() {
    this.personService.getPredecessors(this.personId).subscribe( data => {
      if (data == null) {
        this.router.navigate([""])
      } else {
        this.peopleList = data;
        this.count = data.length;
      }
    })
  }

  back() {
    this.router.navigate([""])
  }

  selectPerson(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;

    this.router.navigate(["/person/" + value])
  }

}
