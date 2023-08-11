import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsBoardComponent } from './kids-board.component';

describe('KidsBoardComponent', () => {
  let component: KidsBoardComponent;
  let fixture: ComponentFixture<KidsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
