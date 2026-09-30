import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { Tooltip } from '../../src/components/Tooltip/Tooltip';

describe('Tooltip Component', () => {
  
  test('renders child element', () => {
    render(
      <Tooltip content="Hello">
        <button>Hover me</button>
      </Tooltip>
    );

    expect(
      screen.getByText('Hover me')
    ).toBeInTheDocument();
  });

  test('shows tooltip on hover', async () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(
      screen.getByText('Hover')
    );

    await waitFor(() => {
      expect(
        screen.getByText('Tooltip text')
      ).toBeVisible();
    });
  });

 

  test('hides tooltip on mouse leave', async () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover</button>
      </Tooltip>
    );

    const trigger =
      screen.getByText('Hover');

    fireEvent.mouseEnter(trigger);

    await waitFor(() =>
      expect(
        screen.getByText('Tooltip text')
      ).toBeVisible()
    );

    fireEvent.mouseLeave(trigger);

    await waitFor(() =>
      expect(
        screen.getByText('Tooltip text')
      ).not.toBeVisible()
    );
  });

  test('does not show when disabled', async () => {
    render(
      <Tooltip
        content="Tooltip text"
        disabled
      >
        <button>Hover</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(
      screen.getByText('Hover')
    );

    await waitFor(() => {
      expect(
        screen.getByText('Tooltip text')
      ).not.toBeVisible();
    });
  });

  test('renders rich content', async () => {
    render(
      <Tooltip
        content={
          <div>
            <strong>Title</strong>
            <span>Desc</span>
          </div>
        }
      >
        <button>Hover</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(
      screen.getByText('Hover')
    );

    await waitFor(() => {
      expect(
        screen.getByText('Title')
      ).toBeInTheDocument();

      expect(
        screen.getByText('Desc')
      ).toBeInTheDocument();
    });
  });

  test('hides arrow when showArrow=false', async () => {
    render(
      <Tooltip
        content="Tooltip"
        showArrow={false}
      >
        <button>Hover</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(
      screen.getByText('Hover')
    );

    await waitFor(() => {
      const tooltip =
        screen.getByRole('tooltip');

      // Arrow is a child div → should not exist
      expect(
        tooltip.querySelector('div')
      ).toBeNull();
    });
  });

  test('adds aria-describedby when visible', async () => {
    render(
      <Tooltip content="Tooltip">
        <button>Hover</button>
      </Tooltip>
    );

    const trigger =
      screen.getByText('Hover');

    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip =
        screen.getByRole('tooltip');

      expect(
        trigger
      ).toHaveAttribute(
        'aria-describedby',
        tooltip.id
      );
    });
  });
});