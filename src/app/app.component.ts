import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { texto } from './modulo1';
import { calcularMedia } from './modulo1/atividade2';
import {obterNomeDiaSemana} from './modulo1/atividade3';

console.log(texto);

const media = calcularMedia(7.5, 8.0, 9.5);
console.log(`A média das notas é: ${media}`);

const diaAtual = 3;
console.log(`O dia da semana é: ${obterNomeDiaSemana(diaAtual)}`);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-word-modulo';
}
