import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    DialogModule,
    TagModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {
  // products: Product[] | undefined;

  visible: boolean = false;
  visibles: boolean = false;
  products = [
    {
      imagen:
        'https://media.licdn.com/dms/image/C561BAQFuDa7bnTijFg/company-background_10000/0/1608825903661?e=1693944000&v=beta&t=mj-ETKU8X7hYIEcmyPEFdBRozN9m01_GOU1AI78l0jU',
        name: 'David',
        lastname: 'Martinez',
      },
      {
        imagen:
          'https://media.licdn.com/dms/image/C561BAQFuDa7bnTijFg/company-background_10000/0/1608825903661?e=1693944000&v=beta&t=mj-ETKU8X7hYIEcmyPEFdBRozN9m01_GOU1AI78l0jU',
      name: 'Jessica',
      lastname: 'Vivas',
    },
  ];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //   this.products = products;
    // });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }

  showDialog() {
    this.visible = true;
  }
  showDialogo() {
    this.visibles = true;
  }
}
