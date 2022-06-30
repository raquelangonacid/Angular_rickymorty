import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
public elementsURL: string="https://rickandmortyapi.com/api/character"
  constructor(private httpClient: HttpClient) { }

  public getElements() {
    return this.httpClient.get(this.elementsURL)
  }

  public getElement(characterID: any){
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/${characterID}`)
  }
}
