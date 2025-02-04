import {UseCase} from '../../../core/core-interface/use-case';
import {CharactersEntity} from '../../entity/characters/characters-entity.model';
import {Observable} from 'rxjs';
import {CharactersRepository} from '../../repository/characters/characters.repository';

export class GetHasNextAndCharactersUseCase implements UseCase<{ page: number; needRequest: boolean }, CharactersEntity> {
  constructor(private charactersRepository: CharactersRepository) {}

  execute(params: { page: number; needRequest: boolean }): Observable<CharactersEntity> {
    return this.charactersRepository.getCharacters(params);
  }
}
