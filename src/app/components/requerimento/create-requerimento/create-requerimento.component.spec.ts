import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequerimentoComponent } from './create-requerimento.component';

describe('CreateRequerimentoComponent', () => {
  let component: CreateRequerimentoComponent;
  let fixture: ComponentFixture<CreateRequerimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequerimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequerimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
