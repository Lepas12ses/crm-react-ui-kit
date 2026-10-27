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

const ROOT_STYLE: React.CSSProperties = {
  width: 200,
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
        <ProgressBar.Root {...p} theme={theme} style={ROOT_STYLE}>
          <ProgressBar.Indicator />
        </ProgressBar.Root>
      )}
    </ComponentPlayground>
  );

  return PlaygroundItem;
};

export const ProgressBarPrimaryPlaygroundItem = createPlaygroundItem(
  ProgressBarPrimaryTheme
);
