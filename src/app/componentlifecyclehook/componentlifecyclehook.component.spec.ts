import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlifecyclehookComponent } from './componentlifecyclehook.component';

describe('ComponentlifecyclehookComponent', () => {
  let component: ComponentlifecyclehookComponent;
  let fixture: ComponentFixture<ComponentlifecyclehookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentlifecyclehookComponent]
    });
    fixture = TestBed.createComponent(ComponentlifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
