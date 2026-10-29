import React, { forwardRef, isValidElement } from 'react';
import cx from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { useThemeClassName } from '@ui-kit/hooks/useThemeClassName';

import { type SkeletonProps } from './Skeleton.props';
import { type SkeletonTheme } from './Skeleton.themes';

import s from './Skeleton.module.css';

/**
 * Placeholder shown in place of the content while it is loading.
 */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  (props, ref) => {
    const {
      isLoading = true,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      className,
      style,
      theme,
      children,
      ...rest
    } = props;

    const themeClassName = useThemeClassName<SkeletonTheme>(theme);

    if (!isLoading) {
      return <>{children}</>;
    }

    const isElement = isValidElement(children);

    const Tag = isElement ? Slot : 'span';

    const rootStyle: React.CSSProperties = {
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      ...style,
    };

    const rootClassName = cx(
      s.skeleton,
      themeClassName,
      { [s.empty]: !isElement },
      className
    );

    return (
      <Tag
        ref={ref}
        aria-hidden
        tabIndex={-1}
        className={rootClassName}
        style={rootStyle}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

Skeleton.displayName = 'Skeleton';
