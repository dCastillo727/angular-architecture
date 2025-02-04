import {Observable} from 'rxjs';
import {CharactersEntity} from '../../entity/characters/characters-entity.model';

export abstract class CharactersRepository {
  abstract getCharacters(params: {page: number; needRequest: boolean}): Observable<CharactersEntity>;
}
