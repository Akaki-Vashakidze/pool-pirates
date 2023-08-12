import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsInfoComponent } from './stars-info.component';

describe('StarsInfoComponent', () => {
  let component: StarsInfoComponent;
  let fixture: ComponentFixture<StarsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
