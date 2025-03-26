import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelA1Component } from './level-a1.component';

describe('LevelA1Component', () => {
  let component: LevelA1Component;
  let fixture: ComponentFixture<LevelA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelA1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
