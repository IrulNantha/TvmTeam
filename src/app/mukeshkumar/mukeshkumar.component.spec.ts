import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MukeshkumarComponent } from './mukeshkumar.component';

describe('MukeshkumarComponent', () => {
  let component: MukeshkumarComponent;
  let fixture: ComponentFixture<MukeshkumarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MukeshkumarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MukeshkumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
