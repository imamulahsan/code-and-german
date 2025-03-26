import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelA2Component } from './level-a2.component';

describe('LevelA2Component', () => {
  let component: LevelA2Component;
  let fixture: ComponentFixture<LevelA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelA2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
