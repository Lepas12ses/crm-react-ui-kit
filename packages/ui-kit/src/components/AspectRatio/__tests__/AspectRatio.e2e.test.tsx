import React from 'react';

import { test } from '@crm-react-ui-kit-e2e/test';

import { multiCartesian, prettyProps } from '@ui-kit/tests/e2e/utils';

import { type AspectRatioProps } from '..';

import { AspectRatioPlaygroundItem } from './AspectRatio.e2e-playground';

const ratioCombinations = multiCartesian<AspectRatioProps>([
  { ratio: [1, 16 / 9, 4 / 3, 9 / 16] },
]);

test.describe('AspectRatio ratio', () => {
  for (const props of ratioCombinations) {
    test(
      prettyProps(props),
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <AspectRatioPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  }
});
