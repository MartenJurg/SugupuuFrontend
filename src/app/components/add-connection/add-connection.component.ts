import {Component, HostListener, OnInit, Input} from '@angular/core';
import {LocalStorageService} from "../../_services/localstorage.service";
import {PersonService} from "../../_services/person.service";
import {PersonDto} from "../../_pojo/Forms/personDto";
import {ConnectionService} from "../../_services/connection.service";
import {PersonToChildConnectionDto} from "../../_pojo/Forms/PersonToChildConnectionDto";

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.css']
})
export class AddConnectionComponent implements OnInit {

  @Input() personId: number;

  firstName = "";
  lastName = "";
  age = "";
  gender = "MALE";

  possibleParents;

  constructor(private localStorageService: LocalStorageService,
              private personService: PersonService,
              private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.processPossibleParents()
  }

  processPossibleParents() {
    this.personService.getParentsId(this.personId).subscribe( data => {
      console.log(data);
      if (data.length == 1) {
        this.personService.getAllPartnersId(data[0].id).subscribe( data => {
          this.possibleParents = data;
        })
      }
    })
  }

  updateGender(value) {
    this.gender = value
  }

  addChild() {
    console.log("addChild");
    this.personService.addChildById(
      new PersonDto(this.firstName, this.lastName, +this.age, this.gender, this.localStorageService.getFamilyTree().id),
      this.personId).subscribe( data => {
      console.log("SUCCEESS")
      location.reload()
    })
  }
  addParent() {
    console.log("addParent");
    this.personService.addParentById(
      new PersonDto(this.firstName, this.lastName, +this.age, this.gender, this.localStorageService.getFamilyTree().id),
      this.personId).subscribe( data => {
      console.log("SUCCEESS")
      location.reload()
    })
  }
  addPartner() {
    console.log("addPartner");
    this.personService.addPartnerById(
      new PersonDto(this.firstName, this.lastName, +this.age, this.gender, this.localStorageService.getFamilyTree().id),
      this.personId).subscribe( data => {
        console.log("SUCCEESS")
      location.reload()
    })

  }
  addExPartner() {
    console.log("addExPartner");
    this.personService.addExPartnerById(
      new PersonDto(this.firstName, this.lastName, +this.age, this.gender, this.localStorageService.getFamilyTree().id),
      this.personId).subscribe( data => {
      console.log("SUCCEESS")
      location.reload()
    })
  }

  addExistingParent(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    console.log(value);
    console.log(this.personId);
    console.log(this.localStorageService.getFamilyTree().id);
    this.connectionService
      .addParentConnection(new PersonToChildConnectionDto(value, this.personId, this.localStorageService.getFamilyTree().id))
      .subscribe( data => {
      location.reload()
    })

  }
}
