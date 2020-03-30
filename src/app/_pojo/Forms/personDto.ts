export class PersonDto {

  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  familyTreeId: number;


  constructor(firstName: string, lastName: string, age: number, gender: string, familyTreeId: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.familyTreeId = familyTreeId;
  }
}
