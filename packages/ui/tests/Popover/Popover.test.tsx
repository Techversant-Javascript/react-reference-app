import {render,screen,} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from '../../src/components/Popover/Popover';
  
  describe('Popover', () => {
    it('opens on click', async () => {
      const user = userEvent.setup();
  
      render(
        <Popover
          trigger="click"
          content="Popover Content"
        >
          <button>Open</button>
        </Popover>
      );
  
      await user.click(
        screen.getByRole('button')
      );
  
      expect(
        screen.getByText(
          'Popover Content'
        )
      ).toBeVisible();
    });
  
    it('opens on hover', async () => {
      const user = userEvent.setup();
  
      render(
        <Popover
          trigger="hover"
          content="Popover Content"
        >
          <button>Hover</button>
        </Popover>
      );
  
      await user.hover(
        screen.getByRole('button')
      );
  
      expect(
        screen.getByText(
          'Popover Content'
        )
      ).toBeVisible();
    });
  });