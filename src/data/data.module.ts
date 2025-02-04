import {NgModule} from '@angular/core';
import { RequestManager } from '../core/core-interface/request-manager.service';
import {GetHasNextAndCharactersUseCase} from '../domain/usecase/characters/get-hasnext-and-characters.usecase';
import {CharactersRepository} from '../domain/repository/characters/characters.repository';
import {CharactersRemoteDatasource} from './datasource/characters/source/characters-remote-datasource';
import {CharactersRemoteDatasourceImpl} from './datasource/characters/remote/characters-remote-datasource-impl';
import {CharactersLocalDataSource} from './datasource/characters/source/characters-local-datasource';
import {CommonModule} from '@angular/common';
import {CharactersImpRepository} from './repository/characters/characters-implementation.repository';
import {CharactersLocalDatasourceImpl} from './datasource/characters/local/characters-local-datasource-impl';

@NgModule({
  providers: [
    RequestManager,
    GetHasNextAndCharactersUseCase,
    { provide: CharactersRepository, useClass: CharactersImpRepository },
    { provide: CharactersRemoteDatasource, useClass: CharactersRemoteDatasourceImpl },
    { provide: CharactersLocalDataSource, useClass: CharactersLocalDatasourceImpl },
  ],
  imports: [CommonModule],
})
export class DataModule {}
