import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [ // Adicione o "export" para ser importado em outros arquivos
    { path: '', component: HomeComponent },
    { path: 'formulario', component: FormularioComponent }
  ];