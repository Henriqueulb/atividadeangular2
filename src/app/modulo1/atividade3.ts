enum DiaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}

export function obterNomeDiaSemana(dia: number): string {
  switch (dia) {
    case DiaSemana.Domingo:
      return 'Domingo';
    case DiaSemana.Segunda:
      return 'Segunda';
    case DiaSemana.Terca:
      return 'Terça';
    case DiaSemana.Quarta:
      return 'Quarta';
    case DiaSemana.Quinta:
      return 'Quinta';
    case DiaSemana.Sexta:
      return 'Sexta';
    case DiaSemana.Sabado:
      return 'Sábado';
    default:
      return 'Dia inválido';
  }
}

const diaAtual = 3;
console.log(`O dia da semana é: ${obterNomeDiaSemana(diaAtual)}`);
