import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DharanishreeComponent } from './dharanishree.component';

describe('DharanishreeComponent', () => {
  let component: DharanishreeComponent;
  let fixture: ComponentFixture<DharanishreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DharanishreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DharanishreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
