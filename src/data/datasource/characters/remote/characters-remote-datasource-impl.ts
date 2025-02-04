import {Injectable} from '@angular/core';
import {CharactersRemoteDatasource} from '../source/characters-remote-datasource';
import {BehaviorSubject, Observable} from 'rxjs';
import {CharacterDTO} from './dto/rick-and-morty-characters.model';
import {RequestManager} from '../../../../core/core-interface/request-manager.service';
import {environment} from '../../../../core/environments/environment';

@Injectable()
export class CharactersRemoteDatasourceImpl extends CharactersRemoteDatasource {
  private path = `${environment.apiBaseUrl}`
  private charactersSubject = new BehaviorSubject<CharacterDTO>({} as CharacterDTO);

  constructor(private db: RequestManager) {
    super();
  }

  getCharactersList({ page, needRequest }: { page: number; needRequest: boolean }): Observable<CharacterDTO> {
    const shouldMakeRequest = (needRequest && this.hasNextPage()) || page === 1;
    return this.requestCharacters(page);
  }

  private hasNextPage(): boolean {
    const infoValue = this.charactersSubject.value.info;
    return !!infoValue && infoValue.next !== undefined;
  }

  private requestCharacters(page: number): Observable<CharacterDTO> {
    return this.db.doRequest<CharacterDTO>('get', `${this.path}/character/?page=${page}`);
  }
}
