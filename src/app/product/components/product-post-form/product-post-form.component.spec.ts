import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPostFormComponent } from './product-post-form.component';

describe('ProductPostFormComponent', () => {
  let component: ProductPostFormComponent;
  let fixture: ComponentFixture<ProductPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
