import {Injectable, Optional} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../_pojo/person";
import {PersonDto} from "../_pojo/Forms/personDto";


@Injectable({
  providedIn: "root"
})

export  class PersonService {


  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/all");
  }

  getSearchResult(pattern: String, id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/search/" + pattern + "/" + id);
  }

  getYoungestUncleOrAuntOf(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getYoungestUncleOrAunt/" + id);
  }

  getAllSiblingsOf(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getAllSiblingsOf/" + id);
  }

  getPersonWithMostPredecessors(): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getPersonWithMostPredecessors");
  }

  getPredecessors(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getPersonsPredecessors/" + id);
  }

  getRealSiblingsOf(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getRealSiblingsOf/" + id);
  }

  getHalfSiblingsOf(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getHalfSiblingsOf/" + id);
  }

  getAllPeopleByFamilyTreeId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getAllByTree/" + id);
  }

  getParentsId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getParents/" + id);
  }

  getExPartnersId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getExPartners/" + id);
  }

  getAllPartnersId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getAllPartners/" + id);
  }

  getPartnerId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getPartner/" + id);
  }

  getChildrenId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>("api/person/getChildren/" + id);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>("api/person/get/" + id)
  }

  updatePersonById(personDto: PersonDto, id: number): Observable<Person> {
    return this.http.post<Person>("api/person/update/" + id, personDto)
  }

  addPartnerById(personDto: PersonDto, id: number): Observable<Person> {
    return this.http.post<Person>("api/person/addPartner/" + id, personDto)
  }

  addExPartnerById(personDto: PersonDto, id: number): Observable<Person> {
    return this.http.post<Person>("api/person/addExPartner/" + id, personDto)
  }

  addParentById(personDto: PersonDto, id: number): Observable<Person> {
    return this.http.post<Person>("api/person/addParent/" + id, personDto)
  }

  addChildById(personDto: PersonDto, id: number): Observable<Person> {
    return this.http.post<Person>("api/person/addChild/" + id, personDto)
  }
}
