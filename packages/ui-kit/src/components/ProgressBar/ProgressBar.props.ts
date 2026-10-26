import React, { type ComponentPropsWithoutRef } from 'react';
import { Root as RadixProgressRoot } from '@radix-ui/react-progress';

import { type ProgressBarTheme } from './ProgressBar.themes';

type RadixProgressRootProps = ComponentPropsWithoutRef<
  typeof RadixProgressRoot
>;

export interface ProgressBarRootProps
  extends Omit<RadixProgressRootProps, 'value' | 'max' | 'getValueLabel'> {
  /**
   * Object with CSS theme properties.
   */
  theme: ProgressBarTheme;
  /**
   * Progress in percent. Values outside 0..100 are clamped,
   * `NaN` is treated as 0.
   */
  value: number;
  /**
   * `ProgressBar.Indicator` that renders the filled part of the track.
   */
  children?: React.ReactNode;
}
