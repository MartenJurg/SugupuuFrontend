import {Injectable} from "@angular/core";
import {FamilyTree} from "../_pojo/familyTree";
import {Person} from "../_pojo/person";


const SELECTED_FAMILY_TREE_KEY = "SelectedFamilyTree";
const SELECTED_PERSON = "SelectedPerson";


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public saveFamilyTree(familyTree: FamilyTree) {
    window.localStorage.setItem(SELECTED_FAMILY_TREE_KEY, JSON.stringify(familyTree))
  }

  public removeSelectedFamilyTree() {
    window.localStorage.removeItem(SELECTED_FAMILY_TREE_KEY)
  }

  public getFamilyTree(): FamilyTree {
    return JSON.parse(window.localStorage.getItem(SELECTED_FAMILY_TREE_KEY))
  }

  public saveSelectedPerson(person: Person) {
    window.localStorage.setItem(SELECTED_PERSON, JSON.stringify(person))
  }

  public removeSelectedPerson() {
    window.localStorage.removeItem(SELECTED_PERSON)
  }

  public getSelectedPerson(): Person {
    return JSON.parse(window.localStorage.getItem(SELECTED_PERSON))
  }

}
