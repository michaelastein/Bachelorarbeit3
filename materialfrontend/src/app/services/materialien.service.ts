import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materialien } from '../models/materialien.model';

const baseUrl = '/api/materialien';

//URL-Start für Suchanfragen
// wird in Backend an die search-Methode weitergeleitet
const searchUrl = '/api/search';


//http://localhost:8080/api


@Injectable({
  providedIn: 'root'
})
export class MaterialienService {

  constructor(private http: HttpClient) { }


  // Methode, um die gesamte Liste der Materialien abzurufen
  getAll(): Observable<Materialien[]> {
    console.log("getAll" + baseUrl)

    return this.http.get<Materialien[]>(baseUrl);

  }

  get(id: any): Observable<Materialien> {
    console.log(`${baseUrl}/${id}`)
    return this.http.get<Materialien>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log("post" + baseUrl + data)
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }


  // Methode um Materialien, die zu übergebenen Parametern (terms) passen, abzurufen
  find(terms: any): Observable<Materialien[]> {
    
    return this.http.get<Materialien[]>(`${searchUrl}${terms}`);
  }

  // ruft alle Materialien mit diesen Namen ab
  findByName(name: any): Observable<Materialien[]> {
    console.log("find" + `${baseUrl}?name=${name}`)
    return this.http.get<Materialien[]>(`${searchUrl}?name=${name}`);
  }
}
