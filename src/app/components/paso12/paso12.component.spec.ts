import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso12Component } from './paso12.component';

describe('Paso12Component', () => {
  let component: Paso12Component;
  let fixture: ComponentFixture<Paso12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paso12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paso12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
