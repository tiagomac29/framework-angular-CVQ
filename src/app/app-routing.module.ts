import { NgModule } from '@angular/core';
import { RouterModule,Routes, } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

 const routes: Routes = [
    { path: '', component: AppComponent}, // Página inicial
    { path: 'formulario', component: FormularioComponent } // Página de contato
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }