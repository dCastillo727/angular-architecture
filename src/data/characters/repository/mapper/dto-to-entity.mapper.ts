import {Mapper} from '../../../../core/core-interface/mapper';
import {CharacterDTO} from '../../datasource/remote/dto/rick-and-morty-characters.model';
import {CharactersEntity} from '../../../../domain/entity/characters/characters-entity.model';

export class DtoToEntityRepositoryMapper extends Mapper<CharacterDTO, CharactersEntity> {
  mapFrom(param: CharacterDTO): CharactersEntity {
    return {
      info: param.info,
      results: param.results
    }
  }

  mapTo(param: CharactersEntity): CharacterDTO {
    return {
      info: param.info,
      results: param.results
    }
  }
}
