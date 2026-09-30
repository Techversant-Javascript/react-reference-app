// LoginForm.tsx

import React, { useState } from 'react';
import type { LoginFormProps } from './Form.types';

import {
  Wrapper,
  Card,
  Title,
  Subtitle,
  PasswordWrap,
  ToggleBtn,
  Button,
  StyledSpinner,
  ErrorText,
} from './Form.styles';

import { FormField } from './FormField';

function Spinner() {
  return (
    <StyledSpinner
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="10"
        opacity="0.3"
      />

      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </StyledSpinner>
  );
}

export const LoginForm: React.FC<LoginFormProps> = ({
  values,
  errors = {},
  loading,
  disabled,
  showPasswordToggle = true,
  onChange,
  onSubmit,
}) => {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <Wrapper>
      <Card>
        <Title>Login Form</Title>

        <Subtitle>
          Enter credentials
        </Subtitle>

        <form onSubmit={onSubmit}>
          {/* Email Field */}
          <FormField
            id="email"
            name="email"
            label="Email"
            type="email"
            required
            placeholder="Enter email"
            autoComplete="email"
            value={values.email}
            error={errors.email}
            onChange={onChange}
          />

          {/* Password Field */}
          <div>
            <PasswordWrap>
              <FormField
                id="password"
                name="password"
                label="Password"
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                required
                placeholder="Enter password"
                value={values.password}
                error={errors.password}
                onChange={onChange}
              />

              {showPasswordToggle && (
                <ToggleBtn
                  type="button"
                  aria-label={
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? 'Hide'
                    : 'Show'}
                </ToggleBtn>
              )}
            </PasswordWrap>
          </div>

          <Button
            type="submit"
            disabled={
              loading || disabled
            }
          >
            {loading ? (
              <Spinner />
            ) : (
              'Login'
            )}
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};