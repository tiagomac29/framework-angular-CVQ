import { Routes } from '@angular/router';
import { HomeComponent } from './compenentes/home/home.component';
import { Pagina1Component } from './compenentes/pagina1/pagina1.component';
import { Pagina2Component } from './compenentes/pagina2/pagina2.component';
import { SobreComponent } from './compenentes/sobre/sobre.component';
import { NotfoundComponent } from './compenentes/notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'formulario',component:Pagina1Component},
    {path:'pag2',component:Pagina2Component},
    {path:'sobre',component:SobreComponent},
    {path:'notfound',component:NotfoundComponent},
    {path:'**',redirectTo:"notfound",pathMatch:'full'}
];
