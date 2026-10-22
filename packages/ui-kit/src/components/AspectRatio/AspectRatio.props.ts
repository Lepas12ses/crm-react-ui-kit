import React from 'react';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width to height ratio, e.g. `16 / 9`.
   *
   * @default 1
   */
  ratio?: number;
  /**
   * Renders the single child element as the content element instead of
   * its own one. Classes, `style`, handlers and `ref` are merged with
   * the child's ones. `children` must be a single React element.
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Content stretched to the block. With `asChild` — a single React element
   * that becomes the content element.
   */
  children: React.ReactNode;
}
