import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelousHeaderComponent } from './marvelous-header.component';

describe('MarvelousHeaderComponent', () => {
  let component: MarvelousHeaderComponent;
  let fixture: ComponentFixture<MarvelousHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelousHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelousHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
