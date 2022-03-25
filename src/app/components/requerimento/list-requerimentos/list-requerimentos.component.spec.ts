import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequerimentosComponent } from './list-requerimentos.component';

describe('ListRequerimentosComponent', () => {
  let component: ListRequerimentosComponent;
  let fixture: ComponentFixture<ListRequerimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequerimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequerimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
