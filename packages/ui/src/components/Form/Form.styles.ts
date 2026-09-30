import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 460px;
`;

export const Card = styled.div`
  background: white;
  border: 1px solid var(--color-gray-200);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px
    rgba(0, 0, 0, 0.06);
    color: var(--color-gray-900);
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 6px 0 20px;
  color: var(--color-gray-600);
  font-size: 14px;
`;

export const FormGroup = styled.div`
  margin-bottom: 18px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
`;

export const Required = styled.span`
  color: var(--color-danger-600);
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border: 1px solid var(--color-gray-200);
  border-radius: 10px;
  padding-left: 14px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--color-blue-500);
  }

  &:disabled {
    background: var(--color-gray-100);
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
`;

export const ToggleBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  border: none;
  background: white;
  color: var(--color-brand-500);
  cursor: pointer;
  font-size: 13px;
`;

export const ErrorText = styled.p`
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--color-danger-600);
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  border: 1px solid var(--color-brand-500);
  border-radius: 10px;
  background: var(--color-brand-500);
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const UploadBox = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 130px;
  height: 48px;

  padding: 0 16px;

  border: 2px dashed var(--color-gray-300);
  border-radius: 14px;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const FileCard = styled.div`
  margin-top: 16px;
  padding: 12px;
  border-radius: 10px;
  background: var(--color-gray-100);
`;

export const FileName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const FileMeta = styled.div`
  font-size: 13px;
  color: var(--color-gray-600);
  margin-top: 4px;
`;
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const StyledSpinner = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  animation: ${spin} 0.75s linear infinite;
`;