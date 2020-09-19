import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicModalComponent } from './comic-modal.component';

describe('ComicModalComponent', () => {
  let component: ComicModalComponent;
  let fixture: ComponentFixture<ComicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
