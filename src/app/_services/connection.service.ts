import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FamilyTree} from "../_pojo/familyTree";
import {FamilyTreeDto} from "../_pojo/Forms/familyTreeDto";
import {PersonToChildConnectionDto} from "../_pojo/Forms/PersonToChildConnectionDto";

@Injectable({
  providedIn: "root"
})

export  class ConnectionService {


  constructor(private http: HttpClient) {
  }

  addParentConnection(connection: PersonToChildConnectionDto): Observable<PersonToChildConnectionDto[]> {
    return this.http.post<PersonToChildConnectionDto[]>("api/connection/addPersonToChild", connection);
  }

}
