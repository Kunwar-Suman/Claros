import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  it('renders with placeholder text', () => {
    render(<SearchBar value="" onChange={() => {}} placeholder="Search users..." />);
    expect(screen.getByPlaceholderText(/Search users.../i)).toBeDefined();
  });

  it('displays the current value', () => {
    render(<SearchBar value="test query" onChange={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('test query');
  });

  it('calls onChange when typing', async () => {
    let value = '';
    const handleChange = (newValue: string) => {
      value = newValue;
    };

    const { rerender } = render(
      <SearchBar value={value} onChange={handleChange} />
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test');
    
    rerender(<SearchBar value={value} onChange={handleChange} />);
    expect(value).toBeTruthy();
  });

  it('shows clear button when there is a value', () => {
    render(<SearchBar value="test" onChange={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});

