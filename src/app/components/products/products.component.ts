import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  mobiles=[{
    model:'realmenarzo',
    price:170000,
    processor:'snapdragon 845',
    rating:4.5
  },
  {
    model:'samsungs23ultra',
    price:121000,
    processor:'snapdragon 895',
    rating:4.7
  },

  {
    model:'oneplus11',
    price:80000,
    processor:'snapdragon 865',
    rating:4.8,
  }]

}
