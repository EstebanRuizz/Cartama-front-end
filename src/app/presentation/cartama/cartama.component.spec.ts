import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartamaComponent } from './cartama.component';

describe('CartamaComponent', () => {
  let component: CartamaComponent;
  let fixture: ComponentFixture<CartamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartamaComponent]
    });
    fixture = TestBed.createComponent(CartamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
