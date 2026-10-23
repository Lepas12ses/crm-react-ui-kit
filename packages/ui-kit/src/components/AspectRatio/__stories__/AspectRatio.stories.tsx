import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CanvasCentered } from '@storybook-utils/constants';
import forestImage from '@storybook-utils/img/forest.jpg';

import { AspectRatio } from '..';

const USAGE = `
import { AspectRatio } from '@kommo-crm/crm-react-ui-kit/AspectRatio';

function App() {
  return (
    <div style={{ width: 320 }}>
      <AspectRatio ratio={16 / 9}>
        <img src="..." alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </AspectRatio>
    </div>
  );
}
`;

const CONTAINER_STYLE: React.CSSProperties = {
  width: 320,
};

const IMAGE_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const meta = {
  title: 'Components/AspectRatio',
  parameters: {
    ...CanvasCentered,
    docs: {
      source: { code: USAGE, language: 'jsx' },
    },
  },
  component: AspectRatio,
  argTypes: {
    ratio: { control: { type: 'number', min: 0.1, step: 0.1 } },
    asChild: { control: false },
    children: { control: false },
  },
  args: {
    ratio: 16 / 9,
    children: <img src={forestImage} alt="Forest" style={IMAGE_STYLE} />,
  },
  render: (props) => {
    return (
      <div style={CONTAINER_STYLE}>
        <AspectRatio {...props} />
      </div>
    );
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
