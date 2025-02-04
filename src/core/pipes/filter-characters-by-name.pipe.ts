import { Pipe, PipeTransform } from '@angular/core';
import {CharacterResult} from '../../domain/entity/characters/characters-entity.model';

@Pipe({
  name: 'filterCharactersByName'
})
export class FilterCharactersByNamePipe implements PipeTransform {

  transform(characters: CharacterResult[] | undefined, searchText: string): CharacterResult[] {
    if (!characters) {
      return [];
    }

    if (searchText.trim().length === 0) {
      return characters;
    }

    return characters.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()));
  }

}
