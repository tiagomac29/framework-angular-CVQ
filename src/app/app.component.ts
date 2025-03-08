import { FormularioComponent } from './formulario/formulario.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apipublish';

  constructor(private router: Router) {} // Injeta o roteador

  navigateToFormulario() {
    this.router.navigate(['/formulario']); // Redireciona para a página do formulário
  }

  ngOnInit() {
    document.body.style.backgroundColor = '#FCA800'; // Muda o fundo da página ao iniciar
  }
}

