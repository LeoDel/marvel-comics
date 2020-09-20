import {Component, OnInit} from '@angular/core';
import {Comic} from '../comic';
import {MarvelComicsService} from '../marvel-comics.service';
import {PageEvent} from '@angular/material/paginator';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ComicModalComponent} from '../comic-modal/comic-modal.component';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';

@Component({
  selector: 'app-comics-box',
  templateUrl: './comics-box.component.html',
  styleUrls: ['./comics-box.component.scss']
})
export class ComicsBoxComponent implements OnInit {
  comics: Comic[];
  faCircleNotch = faCircleNotch;
  gettingComics = true;
  length = 100;
  pageSize = 10;
  orderByOptions: string[] = ['10'];

  constructor(
    private marvelComicService: MarvelComicsService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getComics();
  }

  getComics(offset = '0'): void {
    this.gettingComics = true;
    this.comics = [];
    this.marvelComicService.getComics(this.pageSize, offset)
      .subscribe(data => {
        this.comics = data['results'];
        this.length = data['total'];
        this.gettingComics = false;
      });
  }

  onPageChange($event): void {
    const offset = $event.pageIndex * $event.pageSize;
    this.getComics(offset.toString());
  }

  moreAboutComic(comic): void {
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    const modalRef = this.modalService.open(ComicModalComponent, {size: 'xl'});
    modalRef.componentInstance.comic = comic;
  }

  getThumbnailUrl(comic: Comic): string {
    return comic.thumbnail.path.concat('.', comic.thumbnail.extension);
  }
}
