import { Component, OnInit } from '@angular/core';
import {Comic} from '../comic';
import {MarvelComicsService} from '../marvel-comics.service';

@Component({
  selector: 'app-comics-box',
  templateUrl: './comics-box.component.html',
  styleUrls: ['./comics-box.component.scss']
})
export class ComicsBoxComponent implements OnInit {
  comics: Comic[];

  constructor(
    private marvelComicService: MarvelComicsService
  ) { }

  ngOnInit(): void {
    this.comics = this.marvelComicService.getComics();
    // this.marvelComicService.getComics()
    //   .subscribe(data => {
    //     console.log("HERE!");
    //     console.log(data);
    //   });
  }

}
