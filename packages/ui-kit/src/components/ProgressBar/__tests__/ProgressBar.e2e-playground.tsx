import React from 'react';

import {
  ComponentPlayground,
  ComponentPlaygroundProps,
} from '@ui-kit/tests/e2e/ComponentPlayground';

import {
  ProgressBar,
  ProgressBarPrimaryTheme,
  type ProgressBarRootProps,
  type ProgressBarTheme,
} from '..';

const CONTAINER_STYLE: React.CSSProperties = {
  width: 200,
  padding: 16,
  background: '#c5c5c5',
};

const createPlaygroundItem = (theme: ProgressBarTheme) => {
  const PlaygroundItem = ({
    appearance,
    props,
  }: ComponentPlaygroundProps<ProgressBarRootProps>) => (
    <ComponentPlayground<ProgressBarRootProps>
      appearance={appearance}
      props={props}
    >
      {(p) => (
        <div style={CONTAINER_STYLE}>
          <ProgressBar.Root {...p} theme={theme}>
            <ProgressBar.Indicator />
          </ProgressBar.Root>
        </div>
      )}
    </ComponentPlayground>
  );

  return PlaygroundItem;
};

export const ProgressBarPrimaryPlaygroundItem = createPlaygroundItem(
  ProgressBarPrimaryTheme
);
