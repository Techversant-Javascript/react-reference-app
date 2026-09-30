import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import {
  LoginForm,
  UploadForm,
} from '../../src/components/Form';

describe(
  'LoginForm Component',
  () => {
    test(
      'renders fields',
      () => {
        render(
          <LoginForm
            values={{
              email: '',
              password: '',
            }}
            onChange={() => {}}
            onSubmit={() => {}}
          />
        );

        expect(
          screen.getByPlaceholderText(
            'Enter email'
          )
        ).toBeInTheDocument();

        expect(
          screen.getByPlaceholderText(
            'Enter password'
          )
        ).toBeInTheDocument();
      }
    );

    test(
      'calls submit',
      () => {
        const onSubmit =
          jest.fn();

        render(
          <LoginForm
            values={{
              email:
                'test@mail.com',
              password:
                '123456',
            }}
            onChange={() => {}}
            onSubmit={onSubmit}
          />
        );

        fireEvent.click(
          screen.getByRole(
            'button',
            {
              name: /login/i,
            }
          )
        );

        expect(
          onSubmit
        ).toHaveBeenCalled();
      }
    );

    test(
      'toggle password',
      () => {
        render(
          <LoginForm
            values={{
              email: '',
              password:
                '123456',
            }}
            onChange={() => {}}
            onSubmit={() => {}}
          />
        );

        const input =
          screen.getByPlaceholderText(
            'Enter password'
          );

        expect(input).toHaveAttribute(
          'type',
          'password'
        );

        fireEvent.click(
          screen.getByText(
            'Show'
          )
        );

        expect(input).toHaveAttribute(
          'type',
          'text'
        );
      }
    );
  }
);

describe(
  'UploadForm Component',
  () => {
    test(
      'renders upload title',
      () => {
        render(
          <UploadForm
            onFileChange={() => {}}
          />
        );

        expect(
          screen.getByText(
            'Document Upload'
          )
        ).toBeInTheDocument();
      }
    );

    test(
      'shows selected file',
      () => {
        const file =
          new File(
            ['hello'],
            'sample.pdf',
            {
              type: 'application/pdf',
            }
          );

        render(
          <UploadForm
            file={file}
            onFileChange={() => {}}
          />
        );

        expect(
          screen.getByText(
            'sample.pdf'
          )
        ).toBeInTheDocument();
      }
    );

    test(
      'shows error text',
      () => {
        render(
          <UploadForm
            error="Invalid file"
            onFileChange={() => {}}
          />
        );

        expect(
          screen.getByText(
            'Invalid file'
          )
        ).toBeInTheDocument();
      }
    );
  }
);