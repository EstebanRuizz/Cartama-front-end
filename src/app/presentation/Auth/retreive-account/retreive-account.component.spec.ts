import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreiveAccountComponent } from './retreive-account.component';

describe('RetreiveAccountComponent', () => {
  let component: RetreiveAccountComponent;
  let fixture: ComponentFixture<RetreiveAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetreiveAccountComponent]
    });
    fixture = TestBed.createComponent(RetreiveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
