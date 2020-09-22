<div class="row description">
  <div class="col-sm-2">
    <img src="assets/opacity-zero.jpg" alt="product image" />
  </div>
  <div class="col-sm-6">
    <p class="album-name">Opacity Zero</p>
    <p class="band-name">The Prependers</p>
    <p class="album-release-date">September 25, 2014</p>
  </div>
</div>
 25  src/app/product-description/product-description.component.spec.ts 
@@ -0,0 +1,25 @@
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionComponent } from './product-description.component';

describe('ProductDescriptionComponent', () => {
  let component: ProductDescriptionComponent;
  let fixture: ComponentFixture<ProductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
