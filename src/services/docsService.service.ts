import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient } from '@angular/common/http';
import { Documents } from 'src/models/documents';


@Injectable({
  providedIn: 'root'
})
export class DocsServiceService {

constructor(private http: HttpClient) { }

getDocs(): Observable<Documents[]> {
  let link: string = `https://localhost:44388/api/orders/allDoc`;
  return this.http.get<Documents[]>(link);
}
}
