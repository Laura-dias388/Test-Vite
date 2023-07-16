export const megaSena = (tryArray: number[]): boolean => {
  const luckyNumbers = [5]
  if (!tryArray) throw new Error('Parâmetro não pode ser nulo');
  if (luckyNumbers.length !== tryArray.length) throw new Error('Arrays com tamanho diferente');
  return tryArray.every((num, index) => num === luckyNumbers[index]);
};

export const generateLuckyNumbers = (): number[] => [Math.floor((Math.random() * 5) + 1)];

let count = 0;
export const playMega = (array: number[]): string => {
  if (megaSena(array)) {
    return `Você ganhou depois de ${count} tentativas!`;
  } else {
    count += 1;
    return 'Você perdeu!'
  }
}