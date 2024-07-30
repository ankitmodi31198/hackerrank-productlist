# Product Filters

## Environment 

- Angular CLI Version: 15.2.8
- Angular Core Version: 15.2.8
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/96W0aIf85OgkLlwTzUnsVQ/productFilters.gif)

## Functionality Requirements

There are 2 components in the app:
- `Filters` component: A reusable component that is used to define the filters for the final products list to be rendered. It accepts the filter type and the list of filter values as input, and outputs the selected filter based on the criteria mentioned below.
- `ProductList` component: This component is used to render the list of products. 

The application has the following functionalities:

- The app should render the entire list of Product objects, initially. The interface for an object,  and a list of products is defined in the file `app.component.ts` and has the following structure:

```
  interface Product {
    title: string;
    category: string; // Possible values - Clothing, Footwear or Accessories
    gender: string; // Possible values - Men, or Women
    brand: string;
  }
```

- In the left pane, there are 2 `Filters` component instances -
  - The first filter instance filters the products based on the `gender` property. Clicking on a filter should render the products for which the `gender` value matches the filter value. In case `All` is clicked, this filter should have no effect and should not filter out any products.
  - The second filter instance filters the products based on the `category` property. Clicking on a filter should render the products for which the `category` value matches the filter value. In case `All` is clicked, this filter should have no effect and should not filter out any products.
  - In default state of filters, no value is selected. 
  - The first click selects a filter and the second consecutive click unselects the filter, and resets the filter to default state.
  - If both the filters have a value selected, the products should be filtered based on the combination of both the filters. For example, if the first filter has `Men` selected and the second filter has `Clothing` selected, show all `Clothing` categories whose gender is `Men` in the right pane. 

- The right pane contains the `ProductList` component.  It renders the filtered product items in a list item `<li>` inside the list `<ul data-test-id="product-list​​​​​​​"></ul>`.

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The `<ul>` containing `gender` filters: `gender-filter`.
- The `<ul>` containing `category` filters: `category-filter`.
- The output `<ul>`: `product-list​​​​​​​`.

## Project Specifications

**Read-only Files**
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
 npm start
```
- install: 
```bash
 npm install
```
- test: 
```bash
 npm test
```
