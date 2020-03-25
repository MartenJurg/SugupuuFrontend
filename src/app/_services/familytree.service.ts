import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FamilyTree} from "../_pojo/familyTree";
import {FamilyTreeDto} from "../_pojo/Forms/familyTreeDto";


@Injectable({
  providedIn: "root"
})

export  class FamilyTreeService {


  constructor(private http: HttpClient) {
  }

  getAllFamilyTrees(): Observable<FamilyTree[]> {
    return this.http.get<FamilyTree[]>("api/familytree/getAll");
  }

  addFamilyTree(familyTreeForm: FamilyTreeDto) {
    return this.http.post("api/familytree/add", familyTreeForm);
  }
}
