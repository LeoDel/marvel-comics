import {Component, OnInit, ViewChild} from '@angular/core';
import {Comic} from '../comic';
import {MarvelComicsService} from '../marvel-comics.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ComicModalComponent} from '../comic-modal/comic-modal.component';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {Character} from '../character';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-comics-box',
  templateUrl: './comics-box.component.html',
  styleUrls: ['./comics-box.component.scss']
})
export class ComicsBoxComponent implements OnInit {
  comics: Comic[];
  characters$: Observable<Character[]>;
  faCircleNotch = faCircleNotch;
  gettingComics = true;
  length = 100;
  pageSize = 10;
  orderBy = null;
  characterId = null;
  characterInputDisabled = false;
  @ViewChild('paginator') matPaginator: MatPaginator;

  private characterNameSearch = new Subject<string>();

  constructor(
    private marvelComicService: MarvelComicsService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.characters$ = this.characterNameSearch.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((charName: string) => this.marvelComicService.searchCharacter(charName))
    );
    this.getComics(0);
  }

  getComics(offset): void {
    this.gettingComics = true;
    this.comics = [];
    this.marvelComicService.getComics(this.pageSize, offset, this.orderBy, this.characterId)
      .subscribe((data: any) => {
        this.comics = data.results;
        this.length = data.total;
        this.gettingComics = false;
      });
  }

  searchCharacter(characterName: string): void {
    console.log(`searchCharacter(${characterName}: string)`);
    this.characterNameSearch.next(characterName);
  }

  characterSearchDisplayWith(char): string {
    return char.name;
  }

  applySelectedCharacter(character: Character): void {
    console.log(`applySelectedCharacter(${character.id})`);
    this.characterId = character.id;
    this.getComics(0);
    this.characterInputDisabled = true;
  }

  emptyCharacterSearch(): void {
    console.log('emptyCharacterSearch()');
    // console.log(`handleEmptyCharacter(input)`, input.srcElement.value);
    // if (input.srcElement.value == '' || !input.srcElement.value) {
    this.characterId = null;
    this.getComics(0);
    this.characterInputDisabled = false;
    // }
  }

  onPageChange($event): void {
    const offset = $event.pageIndex * $event.pageSize;
    this.getComics(offset.toString());
  }

  moreAboutComic(comic): void {
    const modalRef = this.modalService.open(ComicModalComponent, {size: 'xl'});
    modalRef.componentInstance.comic = comic;
  }

  getThumbnailUrl(comic: Comic): string {
    return comic.thumbnail.path.concat('.', comic.thumbnail.extension);
  }

  orderByChanged(): void {
    this.matPaginator.firstPage();
    this.getComics(0);
  }
}
