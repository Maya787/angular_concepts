import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsecondComponent } from './parentsecond.component';

describe('ParentsecondComponent', () => {
  let component: ParentsecondComponent;
  let fixture: ComponentFixture<ParentsecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentsecondComponent]
    });
    fixture = TestBed.createComponent(ParentsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
