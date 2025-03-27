export function calcularMedia(...notas: number[]): number {
  const total = notas.reduce((acc, nota) => acc + nota, 0);
  return total / notas.length;
}


