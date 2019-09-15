import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColortextComponent } from './colortext.component';

describe('ColortextComponent', () => {
  let component: ColortextComponent;
  let fixture: ComponentFixture<ColortextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColortextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColortextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
