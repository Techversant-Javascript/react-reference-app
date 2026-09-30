import { fireEvent, render, screen } from '@testing-library/react';
import { SearchableSelect } from '../../src/components/SearchableSelect/SearchableSelect';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

describe('Autocomplete', () => {
  test('renders input', () => {
    render(<SearchableSelect options={options} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('filters options', () => {
    render(<SearchableSelect options={options} />);

    const input = screen.getByRole('combobox');

    fireEvent.change(input, {
      target: { value: 'rea' },
    });

    expect(
        screen.getByRole('option', { name: 'React' }),
      ).toBeInTheDocument();

    expect(screen.queryByText('Vue')).not.toBeInTheDocument();
  });

  test('selects option', () => {
    render(<SearchableSelect options={options} />);
  
    const input = screen.getByRole('combobox');
  
    fireEvent.focus(input);
  
    fireEvent.mouseDown(screen.getByText('React'));
  
    expect(input).toHaveValue('React');
  });

  test('supports multiple selection', () => {
    render(<SearchableSelect options={options} multiple />);

    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    fireEvent.mouseDown(screen.getByText('React'));

    expect(
        screen.getByTestId('chip-react'),
      ).toBeInTheDocument();
  });

  test('clears selected values', () => {
    render(
      <SearchableSelect
        options={options}
        multiple
        clearable
      />,
    );

    const input = screen.getByRole('combobox');

    fireEvent.focus(input);

    fireEvent.mouseDown(screen.getByText('React'));

    fireEvent.click(screen.getByLabelText('Clear'));

    expect(screen.queryByTestId('chip-react'),).not.toBeInTheDocument();
  });
});