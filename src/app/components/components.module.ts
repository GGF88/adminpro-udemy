import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ComponentsComponent } from './components.component';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
       IncrementadorComponent,
       ComponentsComponent,
       GraficoDonaComponent
    ],
    exports: [
        IncrementadorComponent,
        ComponentsComponent,
        GraficoDonaComponent
      ],
      imports: [
       SharedModule,
       FormsModule,
       ChartsModule
      ],
})

export class ComponentsModule { }