import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsBoxComponent } from './comics-box.component';

describe('ComicsBoxComponent', () => {
  let component: ComicsBoxComponent;
  let fixture: ComponentFixture<ComicsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
