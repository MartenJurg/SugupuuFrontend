import {Component, HostListener, OnInit, Input} from '@angular/core';
import {LocalStorageService} from "../../_services/localstorage.service";
import {PersonService} from "../../_services/person.service";
import {PersonDto} from "../../_pojo/Forms/personDto";

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  @Input() personId: number;

  firstName = "";
  lastName = "";
  age = "";
  gender = "";
  errorMessage;
  isError = false;

  constructor(private localStorageService: LocalStorageService,
              private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersonById(this.personId).subscribe( data => {
      this.fillFields(data)
    })
  }

  fillFields(person) {
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.age = person.age;
    this.gender = person.gender;
  }


  updatePerson() {
    this.personService.updatePersonById(
      new PersonDto(this.firstName, this.lastName, +this.age, this.gender, this.localStorageService.getFamilyTree().id), this.personId).subscribe( data => {
      location.reload();
    }, error => {
      this.errorMessage = error.error.message;
      this.isError = true;
    })
  }

  updateGender(value) {
    this.gender = value;
  }

}
