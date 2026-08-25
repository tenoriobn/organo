import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-divisor',
  imports: [CommonModule],
  templateUrl: './divisor.component.html',
  styleUrl: './divisor.component.css'
})
export class DivisorComponent {
  tamanho = input<'linha-destaque--grande' | 'linha-destaque--pequena'>('linha-destaque--grande');
  classeGenero = input<string>('');
}

