import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const OTPInput = styled.input`
  width: 40px;
  height: 43px;
  border-radius: 14px;
  border: 1px solid var(--indigo-700);
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }

  &:disabled {
    background: var(--color-gray-100);
    cursor: not-allowed;
  }
`;