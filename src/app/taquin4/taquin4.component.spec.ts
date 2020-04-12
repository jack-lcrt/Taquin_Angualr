import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Taquin4Component } from './taquin4.component';

describe('Taquin4Component', () => {
  let component: Taquin4Component;
  let fixture: ComponentFixture<Taquin4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taquin4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taquin4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
