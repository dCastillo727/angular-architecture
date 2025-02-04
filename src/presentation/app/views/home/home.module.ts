import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from './view/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {DataModule} from '../../../../data/data.module';
import {HomeViewModel} from './viewmodel/home.viewmodel';
import {PipesModule} from '../../../../core/pipes/pipes.module';
import {FormsModule} from '@angular/forms';
import {FilterCharactersByNamePipe} from '../../../../core/pipes/filter-characters-by-name.pipe';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    DataModule,
    PipesModule,
    FormsModule,
    FilterCharactersByNamePipe,
    NgOptimizedImage,
  ],
  providers: [HomeViewModel],
})
export class HomeModule { }
