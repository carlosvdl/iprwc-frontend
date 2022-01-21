import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditOverviewComponent } from './product-edit-overview.component';

describe('ProductEditOverviewComponent', () => {
  let component: ProductEditOverviewComponent;
  let fixture: ComponentFixture<ProductEditOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
