import {NgModule} from '@angular/core';
import {RequestManager} from '../../core/core-interface/request-manager.service';
import {CharactersRemoteDatasource} from './datasource/source/characters-remote-datasource';
import {CharactersRemoteDatasourceImpl} from './datasource/remote/characters-remote-datasource-impl';
import {CharactersLocalDataSource} from './datasource/source/characters-local-datasource';
import {CharactersLocalDatasourceImpl} from './datasource/local/characters-local-datasource-impl';
import {CharactersRepository} from '../../domain/repository/characters/characters.repository';
import {CharactersImpRepository} from './repository/characters-implementation.repository';
import {CommonModule} from '@angular/common';

@NgModule({
  providers: [
    RequestManager,
    {provide: CharactersRemoteDatasource, useClass: CharactersRemoteDatasourceImpl},
    {provide: CharactersLocalDataSource, useClass: CharactersLocalDatasourceImpl},
    {provide: CharactersRepository, useClass: CharactersImpRepository},
  ],
  imports: [CommonModule]
})
export class CharactersDataModule {}
