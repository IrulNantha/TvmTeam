import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbinayaComponent } from './abinaya.component';

describe('AbinayaComponent', () => {
  let component: AbinayaComponent;
  let fixture: ComponentFixture<AbinayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbinayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbinayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
