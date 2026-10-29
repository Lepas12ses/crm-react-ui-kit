import React from 'react';

import { type SkeletonTheme } from './Skeleton.themes';

interface SkeletonOwnProps {
  /**
   * Shows the placeholder. When `false`, only `children` are rendered,
   * without any wrapper.
   *
   * @default true
   */
  isLoading?: boolean;
  /**
   * Placeholder width, any CSS length, e.g. `120px` or `50%`.
   */
  width?: string;
  /**
   * Minimum placeholder width, any CSS length.
   */
  minWidth?: string;
  /**
   * Maximum placeholder width, any CSS length.
   */
  maxWidth?: string;
  /**
   * Placeholder height, any CSS length, e.g. `16px` or `1rem`.
   */
  height?: string;
  /**
   * Minimum placeholder height, any CSS length.
   */
  minHeight?: string;
  /**
   * Maximum placeholder height, any CSS length.
   */
  maxHeight?: string;
  /**
   * Content whose size the placeholder repeats.
   *
   * - **None** - an empty block placeholder sized by `width`, `height`
   *   or `className`.
   * - **React element** - the element itself becomes the placeholder,
   *   without a wrapper. Classes, `style`, `ref` and attributes are merged
   *   with the element's ones; the element's `style` and `tabIndex` win.
   *   The element's background, border, shadow and border radius are
   *   replaced by the placeholder ones. An element with its own `tabIndex`
   *   stays reachable by Tab. `ref` is typed as `HTMLSpanElement` but
   *   points to the element, e.g. `HTMLButtonElement` for `<button>`.
   */
  children?: React.ReactElement;
  /**
   * Object with CSS properties of the theme. The border radius applies in
   * all modes.
   */
  theme: SkeletonTheme;
}

export interface SkeletonProps
  extends SkeletonOwnProps,
    Omit<React.ComponentPropsWithoutRef<'span'>, keyof SkeletonOwnProps> {}
