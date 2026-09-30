import React from 'react';
import type { UploadFormProps } from './Form.types';

import {
  Wrapper,
  Card,
  Title,
  Subtitle,
  UploadBox,
  HiddenInput,
  FileCard,
  FileName,
  FileMeta,
  ErrorText,
} from './Form.styles';

export const UploadForm: React.FC<UploadFormProps> = ({
  title = 'Document Upload',
  description = 'Upload PDF / DOC / Image',
  accept,
  file,
  error,
  disabled,
  onFileChange,
}) => {
  return (
    <Wrapper>
      <Card>
        <Title>{title}</Title>

        <Subtitle>
          {description}
        </Subtitle>

        <UploadBox>
          Choose File

          <HiddenInput
            type="file"
            accept={accept}
            disabled={disabled}
            onChange={onFileChange}
          />
        </UploadBox>

        {file && (
          <FileCard>
            <FileName>
              {file.name}
            </FileName>

            <FileMeta>
              {(
                file.size / 1024
              ).toFixed(1)}{' '}
              KB
            </FileMeta>
          </FileCard>
        )}

        {error && (
          <ErrorText>{error}</ErrorText>
        )}
      </Card>
    </Wrapper>
  );
};