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


  constructor(private localStorageService: LocalStorageService,
              private personService: PersonService,
              private router: Router) { }

  ngOnInit(): void {
    this.initFamilyTree()
  }

  initFamilyTree() {
    if (this.localStorageService.getFamilyTree() != null) {
      this.startAlgorithm()
      this.message = "Family tree: " + this.localStorageService.getFamilyTree().name
    }
  }

  startAlgorithm() {
    // Please do the magic XD
    this.personService.getAllPeopleByFamilyTreeId(this.localStorageService.getFamilyTree().id).subscribe( data => {
      for (let id in data ) {
        this.people.push(new Person(data[id].id ,data[id].firstName ,data[id].lastName ,data[id].age ,data[id].gender ,data[id].familyTreeId))
        console.log(this.people);
        this.isFamilyTreeChosen = true;

      }
    })
  }

  selectPerson(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);

    this.router.navigate(["/person/" + value])

  }
}
