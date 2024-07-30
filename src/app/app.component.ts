import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  genders: string[] = ['All', 'Men', 'Women'];
  categories: string[] = ['All', 'Clothing', 'Footwear', 'Accessories'];

  filteredList: Product[] = [];

  gender = 'gender';
  category = "category";

  selectedGenders = null;
  selectedCategory = null;

  productList: Product[] = [
    {
      title: "Shirt",
      category: "Clothing",
      gender: "Men",
      brand: "Louis Vuitton",
    },
    {
      title: "Slipper",
      category: "Footwear",
      gender: "Men",
      brand: "Adidas",
    },
    {
      title: "Shoe",
      category: "Footwear",
      gender: "Women",
      brand: "Nike",
    },
    {
      title: "Handbag",
      category: "Accessories",
      gender: "Women",
      brand: "Michael Kors",
    },
    {
      title: "Jeans",
      category: "Clothing",
      gender: "Men",
      brand: "Wrangler",
    },
    {
      title: "Jeans",
      category: "Clothing",
      gender: "Women",
      brand: "Gap",
    },
  ]

  constructor() {
    this.filteredList = JSON.parse(JSON.stringify(this.productList));
  }

  ngOnInit() {
  }


  onFilterSelected(filter: string, type: string) {
    this.filteredList = JSON.parse(JSON.stringify(this.productList));


    if (type === this.gender) {
      this.selectedGenders = filter;
    }

    if (type === this.category) {
      this.selectedCategory = filter;
    }


    if (this.selectedGenders && this.selectedGenders !== 'All') {
      this.filteredList = this.filteredList.filter((oData: Product) => {
        return oData.gender === this.selectedGenders;
      })
    }

    if (this.selectedCategory && this.selectedCategory !== 'All') {
      this.filteredList = this.filteredList.filter((oData: Product) => {
        return oData.category === this.selectedCategory;
      })
    }
  }
}

export interface Product {
  title: string;
  category: string;
  gender: string;
  brand: string;
}