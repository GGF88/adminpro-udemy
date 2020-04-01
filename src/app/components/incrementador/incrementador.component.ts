import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ],
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogreso') textprogreso: ElementRef;

  @Input('nombre') leyenda: string = 'Titulo';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
 
  }

  cambios (nuevoValor:number) {

    if (nuevoValor >= 100) {
      this.porcentaje = 100;
    }else if (nuevoValor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = nuevoValor;
    }
    this.textprogreso.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

    
    
  cambiarValor( valor ) {
    
    if ( this.porcentaje >= 100 && valor === +5 ) {
      this.porcentaje = 100;
      return;
    }
    if ( this.porcentaje <= 0 && valor === -5 ) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.textprogreso.nativeElement.focus();
  }
}
