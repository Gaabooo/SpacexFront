import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchsiteComponent } from './launchsite.component';

describe('LaunchsiteComponent', () => {
  let component: LaunchsiteComponent;
  let fixture: ComponentFixture<LaunchsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
