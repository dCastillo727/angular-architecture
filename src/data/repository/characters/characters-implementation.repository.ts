import {CharactersRepository} from '../../../domain/repository/characters/characters.repository';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {CharactersEntity} from '../../../domain/entity/characters/characters-entity.model';
import {Injectable} from '@angular/core';
import {DtoToEntityRepositoryMapper} from './mapper/dto-to-entity.mapper';
import {CharactersRemoteDatasource} from '../../datasource/characters/source/characters-remote-datasource';

@Injectable()
export class CharactersImpRepository extends CharactersRepository {
  characterMapper = new DtoToEntityRepositoryMapper();
  private charactersSubject = new BehaviorSubject<CharactersEntity>({} as CharactersEntity);

  constructor(private charactersRemoteDatasource: CharactersRemoteDatasource) {
    super();
  }

  getCharacters(params: { page: number; needRequest: boolean }): Observable<CharactersEntity> {
    return this.charactersRemoteDatasource.getCharactersList(params)
      .pipe(
        map(this.characterMapper.mapFrom),
        map((value) => {
          const dataStored = this.charactersSubject.value;

          if (value.info) {
            dataStored.info = value.info;
          }

          params.page === 1 && value.results ? dataStored.results = value.results : dataStored.results.push(...value.results);
          return dataStored;
        })
      );
  }
}
