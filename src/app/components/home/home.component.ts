import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../_services/person.service";
import {Person} from "../../_pojo/person";
import { Router } from '@angular/router';

import {LocalStorageService} from "../../_services/localstorage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people = [];
  isFamilyTreeChosen = false;
  message = "";
  searchPattern = "";


  constructor(private localStorageService: LocalStorageService,
              private personService: PersonService,
              private router: Router) { }

  ngOnInit(): void {
    this.initFamilyTree()
  }

  initFamilyTree() {
    if (this.localStorageService.getFamilyTree() != null) {
      this.iniPeople();
      this.message = "Family tree: " + this.localStorageService.getFamilyTree().name
    }
  }

  iniPeople() {
    this.personService.getAllPeopleByFamilyTreeId(this.localStorageService.getFamilyTree().id).subscribe( data => {
      for (let id in data ) {
        this.people.push(new Person(data[id].id ,data[id].firstName ,data[id].lastName ,data[id].age ,data[id].gender ,data[id].familyTreeId))
      }
      this.isFamilyTreeChosen = true;
    })
  }

  selectPerson(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    this.router.navigate(["/person/" + value])
  }

  search() {
    if (this.searchPattern == "") {
      this.people = [];
      this.iniPeople();
    }
    else {
      this.personService.getSearchResult(this.searchPattern).subscribe( data => {
        this.people = data
      })
    }
  }
}
