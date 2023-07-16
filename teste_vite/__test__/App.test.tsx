import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../src/App';
import { vi } from 'vitest';

describe('Testando o fetch', () => {
  afterEach(() => vi.restoreAllMocks());

  it('Verifica se a API retorna um pokemon ao chamar a função com ID', async () => {
    const pokemonMock = { name: 'bulbasaur', sprites: { front_default: 'bulbasaur-image' } };
    const fetchMock = { json: async () => pokemonMock };
    vi.spyOn(global, 'fetch').mockResolvedValue(fetchMock as Response);

    const { debug } = render(<App />);
    
    const pokemon = await screen.findByRole('heading');

    expect(pokemon).toBeInTheDocument();
    debug();
    expect(pokemon).toHaveTextContent('bulbasaur');
  });

  it('Verifica se ao clicar no botão ele chama o próximo pokemon', async () => {
    const pokemonMock = { name: 'ivysaur', sprites: { front_default: 'ivysaur-image' } };
    vi.spyOn(global, 'fetch')
    .mockResolvedValue({ json: async () => pokemonMock } as Response);
    render(<App />);
    
    const nextBtn = screen.getByRole('button',{ name: /Next/i });
    const prevBtn = screen.getByRole('button',{ name: /Prev/i });

    expect(nextBtn).toBeInTheDocument();
    await userEvent.click(nextBtn);
    await userEvent.click(prevBtn);

    const pokemon = await screen.findByRole('heading');
   
    expect(pokemon).toHaveTextContent('ivysaur');
  });

  it('Verifica se ao clicar no botão ele chama o pokemon anterior', async () => {
    const pokemonMock2 = { name: 'bulbasaur', sprites: { front_default: 'bulbasaur-image' } };
    vi.spyOn(global, 'fetch')
    .mockResolvedValue({ json: async () => pokemonMock2 } as Response);
    render(<App />);
 
    const prevBtn = screen.getByRole('button',{ name: /Prev/i});

    const pokemonPrev = await screen.findByRole('heading');
    await userEvent.click(prevBtn);
    
    expect(pokemonPrev).toHaveTextContent('bulbasaur');
  });
});