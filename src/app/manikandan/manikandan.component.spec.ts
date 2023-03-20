import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManikandanComponent } from './manikandan.component';

describe('ManikandanComponent', () => {
  let component: ManikandanComponent;
  let fixture: ComponentFixture<ManikandanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManikandanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManikandanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
