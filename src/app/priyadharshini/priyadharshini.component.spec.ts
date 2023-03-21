import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriyadharshiniComponent } from './priyadharshini.component';

describe('PriyadharshiniComponent', () => {
  let component: PriyadharshiniComponent;
  let fixture: ComponentFixture<PriyadharshiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriyadharshiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriyadharshiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
