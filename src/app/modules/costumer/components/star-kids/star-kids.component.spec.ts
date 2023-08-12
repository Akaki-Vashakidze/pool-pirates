import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarKidsComponent } from './star-kids.component';

describe('StarKidsComponent', () => {
  let component: StarKidsComponent;
  let fixture: ComponentFixture<StarKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarKidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
