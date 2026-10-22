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
        <div style={{ width: 200 }}>
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
