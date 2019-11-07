import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClienteTarjetaComponent } from './cliente-tarjeta/cliente-tarjeta.component';
import { ClienteAgregarTarjetaComponent } from './cliente-agregar-tarjeta/cliente-agregar-tarjeta.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ClienteTarjetaComponent, ClienteAgregarTarjetaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
