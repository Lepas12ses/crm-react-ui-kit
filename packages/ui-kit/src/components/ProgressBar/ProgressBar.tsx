import React, { forwardRef } from 'react';
import { Root as RadixProgressRoot } from '@radix-ui/react-progress';
import cx from 'classnames';

import { useThemeClassName } from '@ui-kit/hooks/useThemeClassName';
import { type CrmUiKitCSSProperties } from '@ui-kit/lib/theme';

import { Indicator } from './components/Indicator';

import { type ProgressBarRootProps } from './ProgressBar.props';
import { type ProgressBarTheme } from './ProgressBar.themes';

import s from './ProgressBar.module.css';

type El = HTMLDivElement;

const MIN_VALUE = 0;
const MAX_VALUE = 100;

/**
 * Radix turns an out-of-range value into the indeterminate state
 * and logs an error, while consumers pass raw ratios like `used / 0`.
 */
const clampValue = (value: number): number => {
  if (Number.isNaN(value)) {
    return MIN_VALUE;
  }

  return Math.min(Math.max(value, MIN_VALUE), MAX_VALUE);
};

const Root = forwardRef<El, ProgressBarRootProps>((props, ref) => {
  const { className = '', theme, value, style, children, ...rest } = props;

  const themeClassName = useThemeClassName<ProgressBarTheme>(theme);

  const clampedValue = clampValue(value);

  const valueStyle: CrmUiKitCSSProperties = {
    '--crm-ui-kit-progress-bar-indicator-width': `${clampedValue}%`,
  };

  return (
    <RadixProgressRoot
      ref={ref}
      value={clampedValue}
      max={MAX_VALUE}
      className={cx(s.progress_bar, themeClassName, className)}
      style={{ ...valueStyle, ...style }}
      {...rest}
    >
      {children}
    </RadixProgressRoot>
  );
});

Root.displayName = 'ProgressBar.Root';

export const ProgressBar = {
  Root,
  Indicator,
};
