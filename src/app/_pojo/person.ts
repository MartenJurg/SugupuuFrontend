﻿﻿export class Person {

  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  familyTreeId: string;

  constructor(id: number, firstName: string, lastName: string, age: number, gender: string, familyTreeId: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.familyTreeId = familyTreeId;
  }
}

