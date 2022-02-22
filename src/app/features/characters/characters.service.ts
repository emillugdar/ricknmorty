import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Info } from "../../core/info.interface";

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  url: string,
  created: string,
  origin: { name: string, url: string },
  location: { name: string, url: string },
  episode: string[]
}

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  base_url = environment.base_url;
  ricknmorty_base_url = environment.ricknmorty_base_url;
  constructor(private http: HttpClient) {}

  getCharacters(page: number, limit: number) {
    let params = new HttpParams().set('page', page).set('limit', limit);
    const url = `${this.base_url}/character`;
    return this.http.get<{ info: Info, results: Character[] }>(url, { params: params });
  }

  getCharacterById(id: number) {
    const url = `${this.ricknmorty_base_url}/character/${id}`;
    return this.http.get<Character>(url);
  }

  getCharactersByIds(ids: number[]) {
    const url = `${this.ricknmorty_base_url}/character/${ids}`;
    return this.http.get<Character[]>(url)
  }
}
