import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../_pojo/person";


@Injectable({
  providedIn: "root"
})

export  class PersonService {


  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/all");
  }


}
