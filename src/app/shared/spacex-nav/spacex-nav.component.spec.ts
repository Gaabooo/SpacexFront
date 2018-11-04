import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SpacexNavComponent } from './spacex-nav.component';

describe('SpacexNavComponent', () => {
  let component: SpacexNavComponent;
  let fixture: ComponentFixture<SpacexNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacexNavComponent],
      imports: [NoopAnimationsModule,]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
