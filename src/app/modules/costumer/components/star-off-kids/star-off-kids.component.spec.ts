import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarOffKidsComponent } from './star-off-kids.component';

describe('StarOffKidsComponent', () => {
  let component: StarOffKidsComponent;
  let fixture: ComponentFixture<StarOffKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarOffKidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarOffKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
