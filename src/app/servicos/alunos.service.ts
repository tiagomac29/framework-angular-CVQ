import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../modelo/aluno.modelo';

interface ApiRetorno{
  erro:boolean;
  mensagem: string;
  dados: Aluno[]
}

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly API_URL : string = "http://localhost/apiColetivo/api/index.php?url=api/ajuda"

  constructor(private http : HttpClient) { }

  criar(aluno: Aluno): Observable <ApiRetorno>{
    return this.http.post<ApiRetorno>(this.API_URL, aluno)
  }

  listarTodos(): Observable <ApiRetorno> {
 return this.http.get<ApiRetorno>(this.API_URL);
}


}

