import { Component, inject } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { Poster } from '../interface/auth.interface';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Subscription } from 'rxjs';
import { PostersService } from '../services/posters.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  responsiveOptions: any[] | undefined;
  Post!: Poster;
  listPost: Poster[] = [];
  private listObservers$: Array<Subscription> = [];
  private readonly posterSvc = inject(PostersService);
  // private readonly toastrSvc = inject(ToastrService);
  private readonly router = inject(Router);

  ngOnInit() {
    const observer2$ = this.posterSvc.getAlll().subscribe(
      (resOk) => {
        this.listPost = resOk.reverse().slice(0, 8);
      },
      ({ error }: HttpErrorResponse) => {
        if (error.message !== undefined) {
          // alert('error');
          // this.toastrSvc.warning(error.message, 'Error');
        } else {
          // alert('error');
          // this.toastrSvc.warning(
          //   'Por favor intentar más tarde, informar al dev....',
          //   'Error'
          // );
        }
      }
    );
    this.listObservers$ = [observer2$];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
    ];
  }

  // onRedirigir(id: string) {
  //   // console.log('Me has presionado', id);
  //   this.router.navigate(['/home/articulo/' + id]);
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 100);
  // }
}
