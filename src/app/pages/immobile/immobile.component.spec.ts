import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobileComponent } from './immobile.component';

describe('ImmobileComponent', () => {
  let component: ImmobileComponent;
  let fixture: ComponentFixture<ImmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
