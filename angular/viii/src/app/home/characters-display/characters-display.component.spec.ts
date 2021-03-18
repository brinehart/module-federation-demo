import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDisplayComponent } from './characters-display.component';

describe('CharactersDisplayComponent', () => {
  let component: CharactersDisplayComponent;
  let fixture: ComponentFixture<CharactersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
