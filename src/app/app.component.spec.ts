import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Filters} from "./filters/filters.component";
import {ProductList} from "./productList/productList.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;

  const getByTestId = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`[data-test-id="${id}"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Filters,
        ProductList
      ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
      .overrideComponent(AppComponent, {
        set: {changeDetection: ChangeDetectionStrategy.Default}
      })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  const verifyAllProductRows = () => {
    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(7);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Shirt');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Louis Vuitton');
    expect(results[2].children[0].innerHTML.trim()).toEqual('Slipper');
    expect(results[2].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[2].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[2].children[3].innerHTML.trim()).toEqual('Adidas');
    expect(results[3].children[0].innerHTML.trim()).toEqual('Shoe');
    expect(results[3].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[3].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[3].children[3].innerHTML.trim()).toEqual('Nike');
    expect(results[4].children[0].innerHTML.trim()).toEqual('Handbag');
    expect(results[4].children[1].innerHTML.trim()).toEqual('Accessories');
    expect(results[4].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[4].children[3].innerHTML.trim()).toEqual('Michael Kors');
    expect(results[5].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[5].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[5].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[5].children[3].innerHTML.trim()).toEqual('Wrangler');
    expect(results[6].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[6].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[6].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[6].children[3].innerHTML.trim()).toEqual('Gap');
  }

  it('Initial UI is rendered as expected', async () => {
    verifyAllProductRows();
  });

  it('Clicking on "Women" gender filter and "All" category filter works', async () => {
    const womenGenderFilter = getByTestId('gender-filter').children[3];
    womenGenderFilter.click();

    const allCategoryFilter = getByTestId('category-filter').children[1];
    allCategoryFilter.click();

    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(4);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Shoe');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Nike');
    expect(results[2].children[0].innerHTML.trim()).toEqual('Handbag');
    expect(results[2].children[1].innerHTML.trim()).toEqual('Accessories');
    expect(results[2].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[2].children[3].innerHTML.trim()).toEqual('Michael Kors');
    expect(results[3].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[3].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[3].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[3].children[3].innerHTML.trim()).toEqual('Gap');
  });

  it('Clicking on "Men" gender filter works and "All" category filter works', async () => {
    const menGenderFilter = getByTestId('gender-filter').children[2];
    menGenderFilter.click();
    const allCategoryFilter = getByTestId('category-filter').children[1];
    allCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();
    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(4);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Shirt');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Louis Vuitton');
    expect(results[2].children[0].innerHTML.trim()).toEqual('Slipper');
    expect(results[2].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[2].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[2].children[3].innerHTML.trim()).toEqual('Adidas');
    expect(results[3].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[3].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[3].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[3].children[3].innerHTML.trim()).toEqual('Wrangler');
  });

  it('Clicking on "Clothing" category and "All" gender filter works', async () => {
    const allGenderFilter = getByTestId('gender-filter').children[1];
    allGenderFilter.click();
    const clothingCategoryFilter = getByTestId('category-filter').children[2];
    clothingCategoryFilter.click();

    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(4);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Shirt');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Louis Vuitton');
    expect(results[2].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[2].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[2].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[2].children[3].innerHTML.trim()).toEqual('Wrangler');
    expect(results[3].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[3].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[3].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[3].children[3].innerHTML.trim()).toEqual('Gap');
  });

  it('Clicking on "Footwear" category and "All" gender filter works', async () => {
    const allGenderFilter = getByTestId('gender-filter').children[1];
    allGenderFilter.click();
    const footwearCategoryFilter = getByTestId('category-filter').children[3];
    footwearCategoryFilter.click();

    await fixture.whenStable();
    fixture.detectChanges();
    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(3);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Slipper');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Adidas');
    expect(results[2].children[0].innerHTML.trim()).toEqual('Shoe');
    expect(results[2].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[2].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[2].children[3].innerHTML.trim()).toEqual('Nike');
  });

  it('Clicking on "Accessories" category and "All" gender filter works', async () => {
    const allGenderFilter = getByTestId('gender-filter').children[1];
    allGenderFilter.click();
    const accessoriesCategoryFilter = getByTestId('category-filter').children[4];
    accessoriesCategoryFilter.click();

    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(2);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Handbag');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Accessories');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Michael Kors');
  });

  it('Clicking on "All" category and "All" gender filter works', async () => {
    const allGenderFilter = getByTestId('gender-filter').children[1];
    allGenderFilter.click();

    const accessoriesCategoryFilter = getByTestId('category-filter').children[4];
    accessoriesCategoryFilter.click();

    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(2);
    
    const allCategoryFilter = getByTestId('category-filter').children[1];
    allCategoryFilter.click();

    await fixture.whenStable();
    fixture.detectChanges();
    
    verifyAllProductRows();
  });

  it('Clicking on "Accessories" category and "Men" gender filter works', async () => {
    const menGenderFilter = getByTestId('gender-filter').children[2];
    menGenderFilter.click();
    const accessoriesCategoryFilter = getByTestId('category-filter').children[4];
    accessoriesCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(1);
  });

  it('Clicking on "Clothing" category and "Men" gender filter works', async () => {
    const menGenderFilter = getByTestId('gender-filter').children[2];
    menGenderFilter.click();
    const clothingCategoryFilter = getByTestId('category-filter').children[2];
    clothingCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(3);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Shirt');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Louis Vuitton');
    expect(results[2].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[2].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[2].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[2].children[3].innerHTML.trim()).toEqual('Wrangler');
  });

  it('Clicking on "Footwear" category and "Men" gender filter works', async () => {
    const menGenderFilter = getByTestId('gender-filter').children[2];
    menGenderFilter.click();
    const footwearCategoryFilter = getByTestId('category-filter').children[3];
    footwearCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(2);

    expect(results[1].children[0].innerHTML.trim()).toEqual('Slipper');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Men');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Adidas');
  });

  it('Clicking on "Clothing" category and "Women" gender filter works', async () => {
    const womenGenderFilter = getByTestId('gender-filter').children[3];
    womenGenderFilter.click();
    const clothingCategoryFilter = getByTestId('category-filter').children[2];
    clothingCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(2);

    expect(results[1].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Gap');
  });

  it('Clicking on "Accessories" category and "Women" gender filter works', async () => {
    const womenGenderFilter = getByTestId('gender-filter').children[3];
    womenGenderFilter.click();
    const accessoriesCategoryFilter = getByTestId('category-filter').children[4];
    accessoriesCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();

    const results = getByTestId('product-list').children;
    expect(results.length).toEqual(2);

    expect(results[1].children[0].innerHTML.trim()).toEqual('Handbag');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Accessories');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Michael Kors');
  });

  it('Clicking on any filter twice unselects the filter to default state', async () => {
    const womenGenderFilter = getByTestId('gender-filter').children[3];
    womenGenderFilter.click();
    let accessoriesCategoryFilter = getByTestId('category-filter').children[4];
    accessoriesCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();

    let results = getByTestId('product-list').children;
    expect(results.length).toEqual(2);

    expect(results[1].children[0].innerHTML.trim()).toEqual('Handbag');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Accessories');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Michael Kors');

    accessoriesCategoryFilter = getByTestId('category-filter').children[4];
    accessoriesCategoryFilter.click();
    await fixture.whenStable();
    fixture.detectChanges();

    results = getByTestId('product-list').children;
    expect(results.length).toEqual(4);
    expect(results[1].children[0].innerHTML.trim()).toEqual('Shoe');
    expect(results[1].children[1].innerHTML.trim()).toEqual('Footwear');
    expect(results[1].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[1].children[3].innerHTML.trim()).toEqual('Nike');
    expect(results[2].children[0].innerHTML.trim()).toEqual('Handbag');
    expect(results[2].children[1].innerHTML.trim()).toEqual('Accessories');
    expect(results[2].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[2].children[3].innerHTML.trim()).toEqual('Michael Kors');
    expect(results[3].children[0].innerHTML.trim()).toEqual('Jeans');
    expect(results[3].children[1].innerHTML.trim()).toEqual('Clothing');
    expect(results[3].children[2].innerHTML.trim()).toEqual('Women');
    expect(results[3].children[3].innerHTML.trim()).toEqual('Gap');
  });
});
