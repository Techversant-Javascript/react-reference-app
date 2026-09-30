import { render, screen } from '@testing-library/react';
import { Timeline } from '../../src/components/Timeline/Timeline';

describe('Timeline', () => {
  const items = [
    {
      id: '1',
      title: 'Started',
    },
    {
      id: '2',
      title: 'Completed',
    },
  ];

  it('renders timeline items', () => {
    render(
      <Timeline items={items} />,
    );

    expect(
      screen.getByText('Started'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Completed'),
    ).toBeInTheDocument();
  });

  it('has accessible timeline role', () => {
    render(
      <Timeline items={items} />,
    );

    expect(
      screen.getByRole('list'),
    ).toBeInTheDocument();
  });
});