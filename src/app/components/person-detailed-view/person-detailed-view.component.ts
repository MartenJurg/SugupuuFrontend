import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import {PersonService} from "../../_services/person.service";
import {LocalStorageService} from "../../_services/localstorage.service";
import {Person} from "../../_pojo/person";

@Component({
  selector: 'app-person-detailed-view',
  templateUrl: './person-detailed-view.component.html',
  styleUrls: ['./person-detailed-view.component.css']
})
export class PersonDetailedViewComponent implements OnInit {
  personId;
  person;

  parents;
  children;
  partners: {};
  exPartners;


  constructor(private localStorageService: LocalStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  ngOnInit(): void {
    this.personId = this.route.snapshot.params.id;
    this.getPersonData();
    this.getPeopleConnectedToPerson();
  }



  getPeopleConnectedToPerson() {
    this.getParents();
    this.getChildren();
    this.getPartners();
  }

  getParents() {
    this.personService.getParentsId(this.personId).subscribe( data => {
      this.parents = data;
    });
  }

  getChildren() {
    this.personService.getChildrenId(this.personId).subscribe( data => {
      this.children = data;
    });
  }

  getPartners() {
    this.personService.getExPartnersId(this.personId).subscribe( data => {
      this.exPartners = data;
    });

    this.personService.getPartnerId(this.personId).subscribe( data => {
      this.partners = data;

    })
  }

  getPersonData() {
    this.personService.getPersonById(this.personId).subscribe( data => {
        if (data == null || +data.familyTreeId != this.localStorageService.getFamilyTree().id) {
          this.router.navigate([""])
        } else {
          this.person = new Person(data.id, data.firstName, data.lastName, data.age, data.gender, data.familyTreeId)
        }
      }
    )
  }

  back() {
    this.router.navigate([""])
  }

}
