import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
      AppComponent,
      FormularioComponent,
      HomeComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule, // Importa o módulo de rotas
      RouterModule // Garante que o roteamento é reconhecido
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

export class appModule {}