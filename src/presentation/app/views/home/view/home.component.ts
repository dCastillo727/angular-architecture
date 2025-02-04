import {Component, HostListener, OnInit} from '@angular/core';
import {HomeViewModel} from '../viewmodel/home.viewmodel';
import {CharactersEntity} from '../../../../../domain/entity/characters/characters-entity.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent implements OnInit{
  public characterList?: CharactersEntity;
  public filterText: string = '';

  constructor(private viewModel: HomeViewModel) { }

  ngOnInit(): void {
    this.viewModel.charactersObserver.subscribe(
      (value) => {
        this.characterList = value;
        console.log(value);
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isScrolledToBottom() && this.filterText === '') {
      this.viewModel.loadMoreCharacters();
    }
  }

  private isScrolledToBottom(): boolean {
    return window.innerHeight + window.scrollY >= document.body.scrollHeight;
  }

}
