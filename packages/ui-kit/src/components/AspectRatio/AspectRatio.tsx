import React, { forwardRef } from 'react';
import { Root as RadixAspectRatioRoot } from '@radix-ui/react-aspect-ratio';

import { type AspectRatioProps } from './AspectRatio.props';

/**
 * Keeps the given width to height ratio. Renders a sizing wrapper and
 * the content element inside it: all props, including `ref`, go to the
 * content element.
 *
 * The wrapper always takes the full parent width and isn't accessible from
 * the outside, so set the width, `max-width` and `margin` on the parent.
 */
export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (props, ref) => {
    return <RadixAspectRatioRoot ref={ref} {...props} />;
  }
);

AspectRatio.displayName = 'AspectRatio';
