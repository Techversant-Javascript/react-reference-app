import styled, { css } from 'styled-components';

interface StyledProps {
  $error?: boolean;
  $dragging?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  width: 340px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadArea = styled.label<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 140px;
  padding: var(--spacing-4);
  border-radius: var(--radius-xl);
  border: 2px dashed var(--violet-500);
  background: var(--color-white);
  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  ${({ $dragging }) =>
    $dragging &&
    css`
      border-color: var(--color-brand-600);
      background: var(--color-brand-300);
    `}

  ${({ $error }) =>
    $error &&
    css`
      border-color: var(--color-danger-500);
    `}
`;

export const HelperText = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-white);
`;

export const ErrorText = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-danger-700);
`;

export const PreviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export const PreviewItem = styled.li`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
`;

export const FileName = styled.span`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

   min-width: 380px;
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: var(--spacing-2);
  overflow: hidden;
  color: var(--color-black);
`;

export const FileNameText = styled.span`
  flex: 1;

  min-width: 0;
  max-width: 220px;

  display: block;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UploadIconWrapper = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--violet-200);
  color: var(--color-black);

`;

export const UploadText = styled.span`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
`;

export const FileCard = styled.div`
  text-overflow: ellipsis;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width:100%;
  min-width: 0;
  box-sizing: border-box;

  padding: var(--spacing-3) var(--spacing-4);
  border-radius: 999px;
  background: var(--violet-200);

  border: 1px solid var(--violet-900);
`;

export const RemoveButton = styled.button`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--violet-400);
  color: var(--color-white);
`;

export const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const PreviewImage = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  border-radius: var(--radius-md);
`;

export const ImagePreviewInBox = styled.img`
  width: 100%;
  height: 100%;

  max-width: 100%;
  max-height: 100%;

  object-fit: contain;

  border-radius: var(--radius-md);
`;
