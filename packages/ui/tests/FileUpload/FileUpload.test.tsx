import { render, screen, fireEvent } from '@testing-library/react';
import { FileUpload } from '../../src/components/FileUpload';

beforeAll(() => {
  URL.createObjectURL = jest.fn(() => 'mock-url');
});

describe('FileUpload', () => {
  it('renders label', () => {
    render(
      <FileUpload label="Upload File" />,
    );

    expect(
      screen.getByText('Upload File'),
    ).toBeInTheDocument();
  });

  it('renders helper text', () => {
    render(
      <FileUpload
        helperText="Choose a file"
      />,
    );

    expect(
      screen.getByText('Choose a file'),
    ).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(
      <FileUpload
        error
        errorMessage="Upload failed"
      />,
    );

    expect(
      screen.getByText('Upload failed'),
    ).toBeInTheDocument();
  });

  it('calls onFilesChange when file selected', () => {
    const onFilesChange = jest.fn();

    render(
      <FileUpload
        onFilesChange={onFilesChange}
      />,
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const file = new File(
      ['hello'],
      'test.txt',
      {
        type: 'text/plain',
      },
    );

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    expect(
      onFilesChange,
    ).toHaveBeenCalledTimes(1);

    expect(
      onFilesChange,
    ).toHaveBeenCalledWith([file]);
  });

  it('supports multiple files', () => {
    const onFilesChange = jest.fn();

    render(
      <FileUpload
        variant="multiple"
        multiple
        onFilesChange={onFilesChange}
      />,
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const file1 = new File(
      ['one'],
      'file1.txt',
      {
        type: 'text/plain',
      },
    );

    const file2 = new File(
      ['two'],
      'file2.txt',
      {
        type: 'text/plain',
      },
    );

    fireEvent.change(input, {
      target: {
        files: [file1, file2],
      },
    });

    expect(
      onFilesChange,
    ).toHaveBeenCalledWith([
      file1,
      file2,
    ]);
  });

  it('shows preview file names', () => {
    render(
      <FileUpload
        variant="image-preview"
        multiple
      />,
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const file = new File(
      ['hello'],
      'image.png',
      {
        type: 'image/png',
      },
    );

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    expect(
      screen.getByText('image.png'),
    ).toBeInTheDocument();
  });

  it('renders disabled input', () => {
    render(
      <FileUpload disabled />,
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    expect(input).toBeDisabled();
  });
}); 