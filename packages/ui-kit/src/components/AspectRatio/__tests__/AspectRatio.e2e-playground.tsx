import React from 'react';

import {
  ComponentPlayground,
  ComponentPlaygroundProps,
} from '@ui-kit/tests/e2e/ComponentPlayground';

import { AspectRatio, type AspectRatioProps } from '..';

const CONTAINER_STYLE: React.CSSProperties = {
  width: 160,
  outline: '1px dashed #c5c5c5',
};

const CONTENT_STYLE: React.CSSProperties = {
  background: '#4c8bf7',
};

export const AspectRatioPlaygroundItem = ({
  appearance,
  props,
}: ComponentPlaygroundProps<AspectRatioProps>) => {
  return (
    <ComponentPlayground<AspectRatioProps>
      appearance={appearance}
      props={props}
    >
      {(p) => {
        return (
          <div style={CONTAINER_STYLE}>
            <AspectRatio {...p} style={CONTENT_STYLE} />
          </div>
        );
      }}
    </ComponentPlayground>
  );
};
