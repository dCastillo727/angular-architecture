import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from './view/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeViewModel} from './viewmodel/home.viewmodel';
import {PipesModule} from '../../../../core/pipes/pipes.module';
import {FormsModule} from '@angular/forms';
import {CharactersUseCaseModule} from '../../../../domain/usecase/characters/characters-use-case.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CharactersUseCaseModule,
    FormsModule,
    NgOptimizedImage,
  ],
  providers: [HomeViewModel],
})
export class HomeModule { }
