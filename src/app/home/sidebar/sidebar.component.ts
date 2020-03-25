import { Component, OnInit } from '@angular/core';
import {FamilyTreeService} from "../../_services/familytree.service";
import {FamilyTreeDto} from "../../_pojo/Forms/familyTreeDto";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  familyTrees;
  newFamilyTree = "";
  familyTreeForm;

  constructor(private familyTreeService: FamilyTreeService) {}

  ngOnInit(): void {
    this.updateFamilyTreeList();
  }

  updateFamilyTreeList() {
    this.familyTreeService.getAllFamilyTrees().subscribe( data => {
      this.familyTrees = data;
      console.log(data);
    });
  }

  addFamilyTree() {
    this.familyTreeForm = new FamilyTreeDto(this.newFamilyTree);
    console.log(this.familyTreeForm);
    this.familyTreeService.addFamilyTree(this.familyTreeForm).subscribe(
      data => {
        this.newFamilyTree = "";
        this.updateFamilyTreeList();
      }
    );

  }
}
