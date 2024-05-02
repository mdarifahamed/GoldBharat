import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductsComponent } from './myproducts.component';

describe('MyproductsComponent', () => {
  let component: MyproductsComponent;
  let fixture: ComponentFixture<MyproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyproductsComponent]
    });
    fixture = TestBed.createComponent(MyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
