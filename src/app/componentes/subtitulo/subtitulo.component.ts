import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-subtitulo',
  imports: [CommonModule],
  templateUrl: './subtitulo.component.html',
  styleUrl: './subtitulo.component.css'
})
export class SubtituloComponent {
  texto = input<string>();
}
