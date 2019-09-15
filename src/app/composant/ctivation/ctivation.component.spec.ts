import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtivationComponent } from './ctivation.component';

describe('CtivationComponent', () => {
  let component: CtivationComponent;
  let fixture: ComponentFixture<CtivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
