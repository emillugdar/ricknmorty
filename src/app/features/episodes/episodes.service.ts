import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Info } from "../../core/info.interface";


export interface Episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  url: string,
  created: string,
  characters: string[],
  charactersIds: number[]
}

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  constructor(private http: HttpClient) {

  }
  getEpisodes(page: number, limit: number) {
    let params = new HttpParams().set('page', page).set('limit', limit);
    const url = `${base_url}/episode`;
    return this.http.get<{ info: Info, results: Episode[] }>(url, { params: params }).pipe(
      map((data: { info: Info, results: Episode[] }) => {
        data.results.forEach(result => {
          let charactersIds: number[] = [];
          result.characters.forEach(character => {
            charactersIds.push(+character.replace('https://rickandmortyapi.com/api/character/', ''));
          })
          result.charactersIds = charactersIds;
        })
        return data;
      })
    );
  }
}
