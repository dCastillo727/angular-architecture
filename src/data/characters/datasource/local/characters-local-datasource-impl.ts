import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CharacterDBO} from './dbo/rick-and-morty-characters.model';
import {environment} from '../../../../core/environments/environment';
import {RequestManager} from '../../../../core/core-interface/request-manager.service';
import {CharactersLocalDataSource} from '../source/characters-local-datasource';

@Injectable()
export class CharactersLocalDatasourceImpl extends CharactersLocalDataSource {
  private path = `${environment.apiBaseUrl}`
  private charactersSubject = new BehaviorSubject<CharacterDBO>({} as CharacterDBO);

  constructor(private db: RequestManager) {
    super();
  }

  getCharactersList({ page, needRequest }: { page: number; needRequest: boolean }): Observable<CharacterDBO> {
    const shouldMakeRequest = (needRequest && this.hasNextPage()) || page === 1;
    return this.requestCharacters(page);
  }

  private hasNextPage(): boolean {
    const infoValue = this.charactersSubject.value.info;
    return !!infoValue && infoValue.next !== undefined;
  }

  private requestCharacters(page: number): Observable<CharacterDBO> {
    return this.db.doRequest<CharacterDBO>('get', `${this.path}/character/?page=${page}`);
  }
}
