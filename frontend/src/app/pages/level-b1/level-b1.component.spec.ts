import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelB1Component } from './level-b1.component';

describe('LevelB1Component', () => {
  let component: LevelB1Component;
  let fixture: ComponentFixture<LevelB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelB1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
