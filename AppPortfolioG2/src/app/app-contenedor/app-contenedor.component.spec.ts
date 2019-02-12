/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppContenedorComponent } from './app-contenedor.component';

describe('AppContenedorComponent', () => {
  let component: AppContenedorComponent;
  let fixture: ComponentFixture<AppContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
