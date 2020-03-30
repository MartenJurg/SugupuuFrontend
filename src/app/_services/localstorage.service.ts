import {Injectable} from "@angular/core";
import {FamilyTree} from "../_pojo/familyTree";

const SELECTED_FAMILY_TREE_KEY = "SelectedFamilyTree";

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
}
