import * as mega from '../src/mega/mega';

describe('Testando MegaSena', () => {

  it('Verificando acerto da função playMega', () => {

    expect(mega.playMega([5])).toBe('Você ganhou depois de 0 tentativas!');
  });

  it('Verificando perda da função playMega', () => {

    expect(mega.playMega([1])).toBe('Você perdeu!');
  });

  it('Testando se retorna um erro caso o parâmetro esteja errado', () => {
    expect(() => mega.megaSena([])).toThrow('Arrays com tamanho diferente');
  });

  it('Verifica se a função megaSena retorna um erro caso o parametro esteja errado', () => {
    expect(() => mega.megaSena([])).toThrow('Arrays com tamanho diferente');
    expect(() => mega.megaSena(null as never)).toThrowError('Parâmetro não pode ser nulo');
  });

  it('Testando o retorno da função generateRandomNumber', () => {
    expect(Array.isArray(mega.generateLuckyNumbers())).toBe(true);
  });
});
