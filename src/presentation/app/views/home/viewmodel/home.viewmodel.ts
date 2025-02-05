import {Injectable} from '@angular/core';
import {
  GetHasNextAndCharactersUseCase
} from '../../../../../domain/usecase/characters/get-hasnext-and-characters.usecase';
import {CharactersEntity} from '../../../../../domain/entity/characters/characters-entity.model';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Injectable()
export class HomeViewModel {
  private charactersSubject = new BehaviorSubject<CharactersEntity>({} as CharactersEntity);

  constructor(private getHasNextAndCharactersUseCase: GetHasNextAndCharactersUseCase) {
    this.initViewModel();
  }

  initViewModel(): void {
    this.getCharacters(1);
  }

  public get charactersObserver(): Observable<CharactersEntity> {
    return this.charactersSubject.asObservable();
  }

  public loadMoreCharacters(): void {
    if (this.hasNextPage()) {
      const page = this.getPageNumberFrom(this.charactersSubject.value.info!.next!);
      this.getCharacters(page);
    }
  }

  private getCharacters(page: number): void {
    this.getHasNextAndCharactersUseCase
      .execute({page, needRequest: true})
      .subscribe((value) => {
        this.charactersSubject.next(value);
      });
  }

  private hasNextPage(): boolean {
    return !!this.charactersSubject.value.info?.next;
  }

  private getPageNumberFrom(url: string): number {
    const match = url.match(/page=(\d+)/);
    return match ? parseInt(match[1]) : 1;
  }
}
