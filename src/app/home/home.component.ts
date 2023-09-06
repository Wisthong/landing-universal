import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { FooterComponent } from "../footer/footer.component";
import { CuerpoComponent } from "../cuerpo/cuerpo.component";
import { BotonesComponent } from "../botones/botones.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        ButtonModule,
        CarouselModule,
        DialogModule,
        TagModule,
        FooterComponent,
        CuerpoComponent,
        BotonesComponent,
        HeaderComponent
    ]
})
export default class HomeComponent {
  // products: Product[] | undefined;

  visible: boolean = false;
  visibles: boolean = false;
  products = [
    {
      imagen:
        'https://media.istockphoto.com/id/1256476283/es/foto/de-una-visi%C3%B3n-a-una-misi%C3%B3n-la-mano-gira-los-dados-y-cambia-la-palabra-visi%C3%B3n-a-misi%C3%B3n.jpg?s=612x612&w=0&k=20&c=Fi--U8StvnPvhPCBouS6ugEsVtx1WmIDgasy60sqg94=',
      name: 'mision',
    },
    {
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHM0VZi8vuJFTX-WvXRYFbx7-vnGBXcCT9A',
      name: 'vision',
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
