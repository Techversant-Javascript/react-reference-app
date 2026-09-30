import React from 'react';
import type { FormFieldProps } from './Form.types';

import {
  FormGroup,
  Label,
  Required,
  Input,
  ErrorText,
} from './Form.styles';

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required,
  error,
  ...rest
}) => {
  return (
    <FormGroup>
      <Label htmlFor={id}>
        {label}
        {required && (
          <Required> *</Required>
        )}
      </Label>

      <Input id={id} {...rest} />

      {error && (
        <ErrorText>{error}</ErrorText>
      )}
    </FormGroup>
  );
};