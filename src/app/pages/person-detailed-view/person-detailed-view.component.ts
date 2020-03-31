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
  firstName = "";
  lastName = "";
  age = "";
  gender = "";
  childCountString = "";
  childCount = 1;

  parents;
  children;
  partners: {};
  exPartners;
  realSiblings;
  halfSiblings;
  allSiblings;
  youngestUncleOrAunt;
  doesYoungestUncleOrAuntExist = false;


  constructor(private localStorageService: LocalStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private personService: PersonService) { }

  ngOnInit(): void {
    this.personId = this.route.snapshot.params.id;
    this.getPersonData();
    this.getPeopleConnectedToPerson();
    this.processUnclesAndAunts()
  }

  processUnclesAndAunts() {
    this.personService.getYoungestUncleOrAuntOf(this.personId).subscribe( data => {

      console.log(data);
      if (data != null) {
        this.youngestUncleOrAunt = data;
        this.doesYoungestUncleOrAuntExist = true;
      }

    })
  }

  processSiblings() {
    for (let id in this.allSiblings) {
      console.log(this.allSiblings[id].id);
      console.log(this.personId);
      if (this.allSiblings[id].age < +this.age) {
        break
      }
      this.childCount++
    }
    this.createChildCountString()
  }

  createChildCountString() {
    switch(this.childCount) {
      case 1: {
        this.childCountString = this.childCount + "st";
        break;
      }
      case 2: {
        this.childCountString = this.childCount + "nd";
        break;
      }
      case 3: {
        this.childCountString = this.childCount + "rd";
        break;
      }
      default: {
        this.childCountString = this.childCount + "th";
        break;
      }
    }
  }


  getPeopleConnectedToPerson() {
    this.getParents();
    this.getChildren();
    this.getPartners();
    this.getSiblings();
  }

  getSiblings() {
    this.personService.getRealSiblingsOf(this.personId).subscribe( data => {
      this.realSiblings = data;
    });

    this.personService.getHalfSiblingsOf(this.personId).subscribe( data => {
      this.halfSiblings = data;
    });
    this.personService.getAllSiblingsOf(this.personId).subscribe( data => {
      this.allSiblings = data;
      this.processSiblings();
    })

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
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.age = data.age.toString();
          this.gender = data.gender;
        }
      }
    )
  }

  back() {
    this.router.navigate([""])
  }

}
