import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CanvasCentered } from '@storybook-utils/constants';

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

const CONTENT_STYLE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--crm-ui-kit-border-radius-default)',
  background:
    'linear-gradient(135deg, var(--crm-ui-kit-palette-active-element-900), var(--crm-ui-kit-palette-border-default))',
  color: 'var(--crm-ui-kit-color-white)',
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
  },
  render: (props) => {
    return (
      <div style={CONTAINER_STYLE}>
        <AspectRatio {...props} style={CONTENT_STYLE} />
      </div>
    );
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
