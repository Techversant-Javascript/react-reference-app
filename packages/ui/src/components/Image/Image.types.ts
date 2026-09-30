import { ImgHTMLAttributes } from 'react';

export type ImageVariant = 'default' | 'rounded' | 'preview';
export type ImageFit = 'cover' | 'contain';

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'ref'> {
  variant?: ImageVariant;
  fit?: ImageFit;

  width?: string;
  height?: string;
}