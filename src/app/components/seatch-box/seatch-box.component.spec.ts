import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatchBoxComponent } from './seatch-box.component';

describe('SeatchBoxComponent', () => {
  let component: SeatchBoxComponent;
  let fixture: ComponentFixture<SeatchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
