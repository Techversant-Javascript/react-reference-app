import { render, screen } from '@testing-library/react';
import { Stepper } from '../../src/components/Stepper/Stepper';

describe('Stepper', () => {
  const steps = [
    {
      id: '1',
      title: 'Step One',
    },
    {
      id: '2',
      title: 'Step Two',
    },
  ];

  it('renders steps correctly', () => {
    render(
      <Stepper
        steps={steps}
      />
    );

    expect(
      screen.getByText('Step One')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Step Two')
    ).toBeInTheDocument();
  });

  it('shows active step', () => {
    render(
      <Stepper
        steps={steps}
        activeStep={1}
      />
    );
  
    expect(
      screen.getByText('2')
    ).toHaveAttribute(
      'aria-current',
      'step'
    );
  });
});