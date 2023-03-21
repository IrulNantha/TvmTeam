import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeyashreeComponent } from './jeyashree.component';

describe('JeyashreeComponent', () => {
  let component: JeyashreeComponent;
  let fixture: ComponentFixture<JeyashreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeyashreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeyashreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
