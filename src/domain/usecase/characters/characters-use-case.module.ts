import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersDataModule} from '../../../data/characters/characters-data.module';
import {GetHasNextAndCharactersUseCase} from './get-hasnext-and-characters.usecase';
import {FilterCharactersByNamePipeUseCase} from './filter-characters-by-name.pipe.usecase';

@NgModule({
  providers: [
    GetHasNextAndCharactersUseCase,
  ],
  imports: [
    CommonModule,
    CharactersDataModule,
    FilterCharactersByNamePipeUseCase,
  ],
  exports: [
    FilterCharactersByNamePipeUseCase,
  ]
})
export class CharactersUseCaseModule { }
