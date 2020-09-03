import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '1234',
      title: 'New from angular',
      image: 'assets/images/banner-1.jpg',
      price: 0,
      description: 'No description'
    };

    this.productService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 10000,
      description: 'New description'
    };

    this.productService.updateProduct('1', updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct('1').subscribe(res => {
      console.log(res);
    });
  }
}
