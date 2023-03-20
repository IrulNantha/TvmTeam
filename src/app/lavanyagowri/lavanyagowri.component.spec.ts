import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavanyagowriComponent } from './lavanyagowri.component';

describe('LavanyagowriComponent', () => {
  let component: LavanyagowriComponent;
  let fixture: ComponentFixture<LavanyagowriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavanyagowriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavanyagowriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
