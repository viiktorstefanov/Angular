import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: ThemeDetailsComponent;
  let fixture: ComponentFixture<ThemeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
