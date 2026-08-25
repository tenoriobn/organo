import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-campo-texto',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './campo-texto.component.html',
  styleUrl: './campo-texto.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CampoTextoComponent),
      multi: true
    },
  ],
})
export class CampoTextoComponent implements ControlValueAccessor{
  label = input<string>();
  id = input<string>();
  placeholder = input<string>();
  tipo = input('text');

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if(v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(v: string): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
