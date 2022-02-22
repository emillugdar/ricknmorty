import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Info } from "../../core/info.interface";

export interface Location {
  id: number,
  name: string,
  type: string,
  dimension: string,
  url: string,
  created: string,
  residents: string[],
  residentsIds: number[]

}

@Injectable({
  providedIn: 'root'
})

export class LocationsService {
  base_url = environment.base_url;
  constructor(private http: HttpClient) {}
  
  getLocations(page: number, limit: number) {
    let params = new HttpParams().set('page', page).set('limit', limit);
    const url = `${this.base_url}/location`;
    return this.http.get<{ info: Info, results: Location[] }>(url, { params: params }).pipe(
      map((data: { info: Info, results: Location[] }) => {
        data.results.forEach(result => {
          let residentsIds: number[] = [];
          result.residents.forEach(resident => {
            residentsIds.push(+resident.replace('https://rickandmortyapi.com/api/character/', ''));
          })
          result.residentsIds = residentsIds;
        })
        return data;
      })
    );
  }
}
