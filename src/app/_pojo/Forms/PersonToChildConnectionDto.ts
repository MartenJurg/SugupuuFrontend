export class PersonToChildConnectionDto {
  personId: number;
  childId: number;
  familyTreeId: number;


  constructor(person: number, child: number, familyTree: number) {
    this.personId = person;
    this.childId = child;
    this.familyTreeId = familyTree;
  }
}
