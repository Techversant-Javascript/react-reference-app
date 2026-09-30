import { forwardRef, useId, useState, DragEvent, ChangeEvent, } from 'react';
import type { FileUploadProps } from './FileUpload.types';
import { Wrapper, HiddenInput, UploadArea, HelperText, ErrorText, FileList, FileCard, FileInfo, FileNameText, RemoveButton, UploadIconWrapper, UploadText, ImagePreviewInBox, PreviewContainer, } from './FileUpload.styles';

export const FileUpload = forwardRef<
    HTMLInputElement,
    FileUploadProps
>(
    (
        {
            variant = 'basic',
            label = 'Upload',
            helperText,
            error,
            errorMessage,
            multiple,
            onFilesChange,
            ...props
        },
        ref,
    ) => {
        const id = useId();

        interface FileItem {
            file: File;
            preview?: string;
        }

        const [files, setFiles] = useState<FileItem[]>([]);
        const [dragging, setDragging] = useState(false);

        const updateFiles = (newFiles: File[]) => {
            const items = createFileItems(newFiles);
            setFiles(items);
            onFilesChange?.(newFiles);
        };

        const createFileItems = (incomingFiles: File[],): FileItem[] => {
            return incomingFiles.map((file) => ({
                file,
                preview:
                    file.type.startsWith('image/') &&
                        typeof URL.createObjectURL === 'function'
                        ? URL.createObjectURL(file)
                        : undefined,
            }));
        };

        const handleChange = (event: ChangeEvent<HTMLInputElement>,) => {
            const selected = Array.from(event.target.files || [],);

            const items = createFileItems(selected);

            setFiles((prev) => {
                const updated = multiple || variant === 'multiple' || variant === 'image-preview'
                  ? [...prev, ...items]
                  : items;

                onFilesChange?.(
                    updated.map((item) => item.file),
                );

                return updated;
            });
        };

        const removeFile = (fileName: string) => {
            setFiles((prev) =>
                prev.filter(
                    (item) =>
                        item.file.name !== fileName,
                ),
            );
        };

        const handleDrop = (
            event: DragEvent<HTMLLabelElement>,
        ) => {
            event.preventDefault();

            setDragging(false);

            const droppedFiles = Array.from(
                event.dataTransfer.files,
            );

            updateFiles(droppedFiles);
        };

        const isDropzone =
            variant === 'dropzone' ||
            variant === 'multiple' ||
            variant === 'image-preview';

        return (
            <Wrapper>
                <HiddenInput
                    id={id}
                    ref={ref}
                    aria-label={label}
                    type="file"
                    multiple={
                        multiple ||
                        variant === 'multiple' ||
                        variant === 'image-preview'
                    }
                    onChange={handleChange}
                    {...props}
                />
                <UploadArea
                    htmlFor={id}
                    $error={error}
                    $dragging={dragging}
                    onDragOver={(e) => {
                        e.preventDefault();

                        if (isDropzone) {
                            setDragging(true);
                        }
                    }}
                    onDragLeave={() => {
                        setDragging(false);
                    }}
                    onDrop={
                        isDropzone
                            ? handleDrop
                            : undefined
                    }
                >
                    {variant === 'image-preview' && files.length > 0 && files[0].preview ? (
                        <PreviewContainer>
                        <ImagePreviewInBox
                            src={files[0].preview}
                            alt={files[0].file.name}
                            />
                            </PreviewContainer>
                    ) : (
                        <>
                            <UploadIconWrapper>
                                ↑
                            </UploadIconWrapper>

                            <UploadText>
                                {label}
                            </UploadText>

                            {helperText && (
                                <HelperText>
                                    {helperText}
                                </HelperText>
                            )}
                        </>
                    )}
                </UploadArea>

                {files.length > 0 &&
                    variant === 'image-preview' && (
                        <FileList>
                            {files.map((item) => (
                                <FileCard key={item.file.name}>
                                    <FileInfo>
                                        <FileNameText>
                                            {item.file.name}
                                        </FileNameText>
                                    </FileInfo>

                                    <RemoveButton
                                        type="button"
                                        onClick={() =>
                                            removeFile(item.file.name)
                                        }
                                    >
                                        ✕
                                    </RemoveButton>
                                </FileCard>
                            ))}
                        </FileList>
                    )}
                {files.length > 0 && variant !== 'image-preview' && (
                    <FileList>
                        {files.map((item) => (
                            <FileCard key={item.file.name}>
                                <FileInfo>
                                    <FileNameText>
                                        {item.file.name}
                                    </FileNameText>
                                </FileInfo>

                                <RemoveButton
                                    type="button"
                                    onClick={() =>
                                        removeFile(item.file.name)
                                    }
                                >
                                    ✕
                                </RemoveButton>
                            </FileCard>
                        ))}
                    </FileList>
                )}
                {error && errorMessage && (
                    <ErrorText>
                        {errorMessage}
                    </ErrorText>
                )}
            </Wrapper>
        );
    },
);

FileUpload.displayName = 'FileUpload';