import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss'],
})
export class BotonesComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
