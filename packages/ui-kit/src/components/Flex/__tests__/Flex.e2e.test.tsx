import React from 'react';

import { test } from '@crm-react-ui-kit-e2e/test';

import { multiCartesian, prettyProps } from '@ui-kit/tests/e2e/utils';
import { Appearance } from '@ui-kit/lib/appearance';

import { type FlexProps } from '..';

import {
  FlexPlaygroundItem,
  FlexWrapPlaygroundItem,
} from './Flex.e2e-playground';

const directionCombinations = multiCartesian<FlexProps>([
  { direction: ['row', 'column'] },
]);

const alignCombinations = multiCartesian<FlexProps>([
  { align: ['start', 'center', 'end', 'baseline', 'stretch'] },
]);

const justifyCombinations = multiCartesian<FlexProps>([
  { justify: ['start', 'center', 'end', 'between'] },
]);

const gapCombinations = multiCartesian<FlexProps>([{ gap: ['2'] }]);

const wrapCombinations = multiCartesian<FlexProps>([
  { wrap: ['wrap', 'wrap-reverse'], gapX: ['1'], gapY: ['4'] },
]);

test.skip(
  ({ appearance }) => appearance !== Appearance.DEFAULT,
  'Flex has no theme, the layout is identical in every appearance'
);

test.describe('Flex direction', () => {
  for (const props of directionCombinations) {
    test(
      prettyProps(props),
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <FlexPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  }
});

test.describe('Flex align', () => {
  for (const props of alignCombinations) {
    test(
      prettyProps(props),
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <FlexPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  }
});

test.describe('Flex justify', () => {
  for (const props of justifyCombinations) {
    test(
      prettyProps(props),
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <FlexPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  }
});

test.describe('Flex gap', () => {
  for (const props of gapCombinations) {
    test(
      prettyProps(props),
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <FlexPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  }
});

test.describe('Flex wrap', () => {
  for (const props of wrapCombinations) {
    test(
      prettyProps(props),
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <FlexWrapPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  }
});
