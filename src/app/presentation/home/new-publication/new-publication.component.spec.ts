import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPublicationComponent } from './new-publication.component';

describe('NewPublicationComponent', () => {
  let component: NewPublicationComponent;
  let fixture: ComponentFixture<NewPublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPublicationComponent]
    });
    fixture = TestBed.createComponent(NewPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
