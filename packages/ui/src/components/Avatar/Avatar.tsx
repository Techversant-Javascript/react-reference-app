import { forwardRef, Children, cloneElement, isValidElement } from 'react';
import type { AvatarProps, AvatarGroupProps } from './Avatar.types';
import {
  AvatarWrapper,
  AvatarImage,
  AvatarFallback,
  StatusDot,
  GroupWrapper,
  GroupItem,
} from './Avatar.styles';

function getInitials(name?: string) {
  if (!name) return '?';

  if (name.length <= 2) return name.toUpperCase(); 

  if (name.startsWith('+')) return name;

  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, name, size = 'md', status, ...rest }, ref) => {
    return (
      <AvatarWrapper ref={ref} $size={size} {...rest}>
        {src ? (
          <AvatarImage src={src} alt={alt} />
        ) : (
          <AvatarFallback $size={size}>{getInitials(name)}</AvatarFallback>
        )}
        {status && <StatusDot $status={status} />}
      </AvatarWrapper>
    );
  },
);

Avatar.displayName = 'Avatar';

export const AvatarGroup = ({ children, max, size = 'md' }: AvatarGroupProps) => {
  const items = Children.toArray(children);
  const visible = max ? items.slice(0, max) : items;
  const extra = max && items.length > max ? items.length - max : 0;

  return (
    <GroupWrapper>
      {visible.map((child, i) => (
        <GroupItem key={i} $index={i}>
          {isValidElement(child) ? cloneElement(child as any, { size }) : child}
        </GroupItem>
      ))}
      {extra > 0 && (
        <GroupItem $index={visible.length}>
          <Avatar name={`+${extra}`} size={size} />
        </GroupItem>
      )}
    </GroupWrapper>
  );
};