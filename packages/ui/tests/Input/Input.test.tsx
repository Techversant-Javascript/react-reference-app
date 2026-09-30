import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../../src/components/Input/Input';

describe(
  'Input',
  () => {
    test(
      'renders label',
      () => {
        render(
          <Input label="Email" />
        );

        expect(
          screen.getByText(
            'Email'
          )
        ).toBeInTheDocument();
      }
    );

    test(
      'handles typing',
      () => {
        render(
          <Input />
        );

        const input =
          screen.getByRole(
            'textbox'
          );

        fireEvent.change(
          input,
          {
            target: {
              value:
                'hello',
            },
          }
        );

        expect(
          input
        ).toHaveValue(
          'hello'
        );
      }
    );

    test(
      'clears value when allowClear clicked',
      () => {
        render(
          <Input
            allowClear
            defaultValue="abc"
          />
        );

        const clear =
          screen.getByRole(
            'button'
          );

        fireEvent.click(
          clear
        );

        const input =
          screen.getByRole(
            'textbox'
          );

        expect(
          input
        ).toHaveValue(
          ''
        );
      }
    );

    test(
      'shows count text',
      () => {
        render(
          <Input
            count
            maxLength={
              10
            }
            defaultValue="abc"
          />
        );

        expect(
          screen.getByText(
            '3/10'
          )
        ).toBeInTheDocument();
      }
    );

    test(
      'calls search handler',
      async () => {
        const fn =
          jest.fn(
            () =>
              Promise.resolve()
          );

        render(
          <Input
            type="search"
            onSearch={
              fn
            }
            defaultValue="john"
          />
        );

        fireEvent.click(
          screen.getByText(
            'Search'
          )
        );

        await waitFor(
          () =>
            expect(
              fn
            ).toHaveBeenCalledWith(
              'john'
            )
        );
      }
    );

    test(
      'disabled input works',
      () => {
        render(
          <Input
            disabled
          />
        );

        expect(
          screen.getByRole(
            'textbox'
          )
        ).toBeDisabled();
      }
    );
  }
);