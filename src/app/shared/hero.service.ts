import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  HeroForm
  searchForm = new FormControl('');
  addheroForm = this.fb.group({
    heroID: [''],
    heroName: [''],
    defense: [''],
    health: [''],
    speed: [''],
    offense: ['']
  });
  constructor(private http: HttpClient,private fb: FormBuilder) { }

  getHero():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:53240/api/Hero");
   }
  addHero(){
    var body = {
      heroID: this.addheroForm.value.heroID,
      heroName: this.addheroForm.value.heroName,
      defense: this.addheroForm.value.defense,
      offense: this.addheroForm.value.offense,
      health: this.addheroForm.value.health,
      speed: this.addheroForm.value.speed,
    };
    return this.http.post("http://localhost:53240/api/Hero", body);
   }
   
  putHero(){
    return this.http.put('http://localhost:53240/api/Hero/' + this.HeroForm.heroID, this.HeroForm);
  }

  deleteHero(hero : Hero | number){
    const id = typeof hero === 'number' ? hero : hero.heroID;
    return this.http.delete('http://localhost:53240/api/Hero/'+id);
  }

  searchHero(term: string):Observable < Hero[]> {
      if(!term.trim()){
        return of([]);
      }
      return this.http.get<Hero[]>("http://localhost:53240/api/Hero")
  }
  search(){
    var body = {condition: this.searchForm.value}
    return this.http.post("http://localhost:53240/api/Hero/Search", body);
  }
}

