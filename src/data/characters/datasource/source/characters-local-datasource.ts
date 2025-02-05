import {Observable} from 'rxjs';
import {CharacterDBO} from '../local/dbo/rick-and-morty-characters.model';

export abstract class CharactersLocalDataSource {
  abstract getCharactersList({page, needRequest}: {page: number, needRequest: boolean}): Observable<CharacterDBO>;
}
