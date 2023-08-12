import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarOffComponent } from './star-off.component';

describe('StarOffComponent', () => {
  let component: StarOffComponent;
  let fixture: ComponentFixture<StarOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
