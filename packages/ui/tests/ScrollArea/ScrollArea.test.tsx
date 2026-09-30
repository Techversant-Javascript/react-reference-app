import { render, screen } from '@testing-library/react';
import { ScrollArea } from '../../src/components/ScrollArea/ScrollArea';

describe('ScrollArea', () => {
  it('renders content', () => {
    render(
      <ScrollArea>
        <div>Scrollable Content</div>
      </ScrollArea>,
    );

    expect(
      screen.getByText('Scrollable Content'),
    ).toBeInTheDocument();
  });
});