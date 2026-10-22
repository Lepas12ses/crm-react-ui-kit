import React, { forwardRef } from 'react';
import cx from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { spacing } from '@ui-kit/lib/spacing';

import {
  type FlexAlign,
  type FlexDirection,
  type FlexDisplay,
  type FlexJustify,
  type FlexProps,
  type FlexWrap,
} from './Flex.props';

import s from './Flex.module.css';

const displayClassName: Record<FlexDisplay, string | undefined> = {
  'flex': undefined,
  'inline-flex': s.display_inline_flex,
  'none': s.display_none,
};

const directionClassName: Record<FlexDirection, string> = {
  'row': s.direction_row,
  'column': s.direction_column,
  'row-reverse': s.direction_row_reverse,
  'column-reverse': s.direction_column_reverse,
};

const alignClassName: Record<FlexAlign, string> = {
  start: s.align_start,
  center: s.align_center,
  end: s.align_end,
  baseline: s.align_baseline,
  stretch: s.align_stretch,
};

const justifyClassName: Record<FlexJustify, string> = {
  start: s.justify_start,
  center: s.justify_center,
  end: s.justify_end,
  between: s.justify_between,
};

const wrapClassName: Record<FlexWrap, string> = {
  'nowrap': s.wrap_nowrap,
  'wrap': s.wrap_wrap,
  'wrap-reverse': s.wrap_wrap_reverse,
};

interface FlexStyle extends React.CSSProperties {
  /**
   * Gap between the columns (`column-gap`).
   */
  '--crm-ui-kit-flex-gap-x'?: string;
  /**
   * Gap between the rows (`row-gap`).
   */
  '--crm-ui-kit-flex-gap-y'?: string;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    as: Tag = 'div',
    asChild = false,
    className = '',
    style,
    children,
    display,
    direction,
    align,
    justify,
    wrap,
    gap,
    gapX = gap,
    gapY = gap,
    ...rest
  } = props;

  const Component = asChild ? Slot : Tag;

  const rootClassName = cx(
    s.flex,
    display && displayClassName[display],
    direction && directionClassName[direction],
    align && alignClassName[align],
    justify && justifyClassName[justify],
    wrap && wrapClassName[wrap],
    gapX && s.gap_x,
    gapY && s.gap_y,
    className
  );

  const rootStyle: FlexStyle = {
    ...(gapX && { '--crm-ui-kit-flex-gap-x': spacing[gapX] }),
    ...(gapY && { '--crm-ui-kit-flex-gap-y': spacing[gapY] }),
    ...style,
  };

  return (
    <Component ref={ref} className={rootClassName} style={rootStyle} {...rest}>
      {children}
    </Component>
  );
});

Flex.displayName = 'Flex';
