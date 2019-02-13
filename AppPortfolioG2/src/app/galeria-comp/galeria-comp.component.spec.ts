/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GaleriaCompComponent } from './galeria-comp.component';

describe('GaleriaCompComponent', () => {
  let component: GaleriaCompComponent;
  let fixture: ComponentFixture<GaleriaCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
