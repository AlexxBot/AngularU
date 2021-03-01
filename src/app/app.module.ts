import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumaComponent } from './suma/suma.component';
//importe importar esto para el two way data binding
import { FormsModule } from '@angular/forms';

@NgModule({
  //array de directivas, pipes, componentes, etc
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    EventosComponent,
    SumaComponent
  ],
  //array de modulos externos a nuestra aplicacion, formularios, httpclient
  imports: [
    BrowserModule,
    FormsModule
  ],
  //servicios
  providers: [],
  //componente raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
