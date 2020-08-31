import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAsyncPipeComponent } from './sample-async-pipe.component';

describe('SampleAsyncPipeComponent', () => {
  let component: SampleAsyncPipeComponent;
  let fixture: ComponentFixture<SampleAsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleAsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
