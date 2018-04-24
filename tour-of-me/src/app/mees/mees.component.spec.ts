import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeesComponent } from './mees.component';

describe('MeesComponent', () => {
  let component: MeesComponent;
  let fixture: ComponentFixture<MeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
