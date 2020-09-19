import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Comic} from '../comic';

@Component({
  selector: 'app-comic-modal',
  templateUrl: './comic-modal.component.html',
  styleUrls: ['./comic-modal.component.scss']
})
export class ComicModalComponent implements OnInit {
  @Input() comic: Comic;

  constructor(
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
  }

}
