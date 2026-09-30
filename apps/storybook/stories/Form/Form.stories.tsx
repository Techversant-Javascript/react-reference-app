import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {LoginForm,UploadForm,} from '@techv/ui';

const meta = {
  title: 'Components/Form',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  render: () => {
    const [values, setValues] =
      useState({
        email: '',
        password: '',
      });

    const [errors, setErrors] =
      useState({});

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValues((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.value,
      }));
    };

    const handleSubmit = (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      const nextErrors: any = {};

      if (!values.email) {
        nextErrors.email =
          'Email is required';
      }

      if (!values.password) {
        nextErrors.password =
          'Password is required';
      }

      setErrors(nextErrors);
    };

    return (
      <LoginForm
        values={values}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  },
};

export const LoginLoading: Story = {
  render: () => {
    const [values, setValues] =
      useState({
        email: 'demo@mail.com',
        password: '123456',
      });

    return (
      <LoginForm
        values={values}
        loading
        onChange={(e) =>
          setValues({
            ...values,
            [e.target.name]:
              e.target.value,
          })
        }
        onSubmit={(e) =>
          e.preventDefault()
        }
      />
    );
  },
};

export const Upload: Story = {
  render: () => {
    const [file, setFile] =
      useState<File | null>(
        null
      );

    const handleFileChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const selected =
        e.target.files?.[0];

      if (selected)
        setFile(selected);
    };

    return (
      <UploadForm
        file={file}
        accept=".pdf,.doc,.png,.jpg"
        onFileChange={
          handleFileChange
        }
      />
    );
  },
};

export const UploadError: Story = {
  render: () => (
    <UploadForm
      error="Only PDF files allowed"
      onFileChange={() => {}}
    />
  ),
};