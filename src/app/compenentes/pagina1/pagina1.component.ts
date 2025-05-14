import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina1',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']  // <- corrigido aqui
})
export class Pagina1Component {
  nome = '';
  telefone = '';
  cep = '';
  desastre = '';

  constructor(private http: HttpClient) {}

  Enviar(form: NgForm) {
    if (form.valid) {
      const dados = {
        nome: this.nome,
        celular: this.telefone,
        cep: this.cep,
        descricaoAjuda: this.desastre
      };

      this.http.post('http://localhost/apiColetivo/api/index.php?url=api/ajuda', dados)
        .subscribe({
          next: (res) => {
            console.log('Resposta da API:', res);
            alert('Enviado com sucesso! 😊');
            form.reset();
          },
          error: (err) => {
            console.error('Erro ao enviar:', err);
            alert('Erro ao enviar formulário.');
          }
        });
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}