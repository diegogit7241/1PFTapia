import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTAbleComponent } from './user-table.component';

describe('UserTAbleComponent', () => {
  let component: UserTAbleComponent;
  let fixture: ComponentFixture<UserTAbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTAbleComponent]
    });
    fixture = TestBed.createComponent(UserTAbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
