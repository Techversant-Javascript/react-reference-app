import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Image } from '../../src/components/Image';

describe('Image', () => {
  it('renders image', () => {
    render(
      <Image
        src="test.jpg"
        alt="sample image"
      />,
    );

    expect(
      screen.getByAltText('sample image'),
    ).toBeInTheDocument();
  });

  it('opens preview modal', async () => {
    const user = userEvent.setup();

    render(
      <Image
        variant="preview"
        src="test.jpg"
        alt="preview image"
      />,
    );

    await user.click(
      screen.getByAltText('preview image'),
    );

    expect(
      screen.getByRole('dialog'),
    ).toBeInTheDocument();
  });
});