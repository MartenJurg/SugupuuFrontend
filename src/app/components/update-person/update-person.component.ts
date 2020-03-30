import {Component, HostListener, OnInit, Input} from '@angular/core';
import {LocalStorageService} from "../../_services/localstorage.service";
import {PersonService} from "../../_services/person.service";
import {PersonDto} from "../../_pojo/Forms/personDto";
import {Person} from "../../_pojo/person";

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  @Input() person: Person;

  firstName = "";
  lastName = "";
  age = "";
  gender = "";

  constructor(private localStorageService: LocalStorageService,
              private personService: PersonService) { }

  ngOnInit(): void {
    this.fillFields(this.person)
  }

  fillFields(person) {
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.age = person.age;
    this.gender = person.gender;
  }

  isPersonSelected() {

  }

  updatePerson() {
    this.personService.updatePersonById(
      new PersonDto(this.firstName, this.lastName, +this.age, this.gender, this.localStorageService.getFamilyTree().id), this.person.id).subscribe( data => {
      location.reload();
    })
  }

  updateGender(value) {
    this.gender = value;
  }

}
