import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from '../../src/components/Carousel/Carousel';

describe('Carousel', () => {
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  it('renders carousel', () => {
    render(<Carousel>{slides}</Carousel>);

    expect(
      screen.getByRole('region')
    ).toBeInTheDocument();
  });

  it("hides previous arrow on first slide", () => {
    render(<Carousel>{slides}</Carousel>);
  
    expect(
      screen.queryByLabelText(/previous/i)
    ).not.toBeInTheDocument();
  
    expect(
      screen.getByLabelText(/next/i)
    ).toBeInTheDocument();
  });

  it('moves to next slide', async () => {
    const user = userEvent.setup();

    render(<Carousel>{slides}</Carousel>);

    await user.click(
      screen.getByLabelText(/next/i)
    );

    expect(
      screen.getByRole('region')
    ).toBeInTheDocument();
  });
});