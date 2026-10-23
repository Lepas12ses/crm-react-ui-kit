import React from 'react';

import forestImage from '@storybook-utils/img/forest.jpg';

import {
  ComponentPlayground,
  ComponentPlaygroundProps,
} from '@ui-kit/tests/e2e/ComponentPlayground';

import { AspectRatio, type AspectRatioProps } from '..';

const CONTAINER_STYLE: React.CSSProperties = {
  width: 160,
  outline: '1px dashed #c5c5c5',
};

const IMAGE_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
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
            <AspectRatio {...p}>
              <img src={forestImage} alt="Forest" style={IMAGE_STYLE} />
            </AspectRatio>
          </div>
        );
      }}
    </ComponentPlayground>
  );
};
