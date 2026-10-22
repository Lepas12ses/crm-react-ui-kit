import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  type ProgressBarRootProps,
  ProgressBar,
  ProgressBarPrimaryTheme,
} from '..';

import '@testing-library/jest-dom';

const indicatorTestId = 'indicator';

const renderProgressBar = (
  props: Partial<ProgressBarRootProps & React.RefAttributes<HTMLDivElement>>
) =>
  render(
    <ProgressBar.Root
      aria-label="Progress"
      value={50}
      theme={ProgressBarPrimaryTheme}
      {...props}
    />
  );

const getValueVariable = () =>
  screen
    .getByRole('progressbar')
    .style.getPropertyValue('--crm-ui-kit-progress-bar-value');

describe('ProgressBar', () => {
  it('should be defined', () => {
    expect(ProgressBar.Root).toBeDefined();
    expect(ProgressBar.Indicator).toBeDefined();
  });

  it('should apply custom div properties', () => {
    const className = 'my-class';

    renderProgressBar({ className, style: { marginTop: 4 } });

    const element = screen.getByRole('progressbar', { name: 'Progress' });

    expect(element).toHaveClass(className);
    /**
     * 1. Module className
     * 2. Theme className
     * 3. Additional class `my-class`
     */
    expect(element.classList).toHaveLength(3);
    expect(element).toHaveStyle({ marginTop: '4px' });
    expect(getValueVariable()).toBe('50%');
  });

  it('should expose value via aria and data attributes', () => {
    renderProgressBar({ value: 42 });

    const element = screen.getByRole('progressbar');

    expect(element).toHaveAttribute('aria-valuemin', '0');
    expect(element).toHaveAttribute('aria-valuemax', '100');
    expect(element).toHaveAttribute('aria-valuenow', '42');
    expect(element).toHaveAttribute('aria-valuetext', '42%');
    expect(element).toHaveAttribute('data-state', 'loading');
    expect(getValueVariable()).toBe('42%');
  });

  it('should mark full progress as complete', () => {
    renderProgressBar({
      value: 100,
      children: <ProgressBar.Indicator data-testid={indicatorTestId} />,
    });

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'data-state',
      'complete'
    );
    expect(screen.getByTestId(indicatorTestId)).toHaveAttribute(
      'data-state',
      'complete'
    );
  });

  it.each([
    { value: -10, expected: 0 },
    { value: 150, expected: 100 },
    { value: NaN, expected: 0 },
    { value: Infinity, expected: 100 },
    { value: -Infinity, expected: 0 },
  ])('should clamp $value to $expected', ({ value, expected }) => {
    const consoleErrorSpy = jest.spyOn(console, 'error');

    renderProgressBar({ value });

    const element = screen.getByRole('progressbar');

    expect(element).toHaveAttribute('aria-valuenow', String(expected));
    expect(element).not.toHaveAttribute('data-state', 'indeterminate');
    expect(getValueVariable()).toBe(`${expected}%`);
    expect(consoleErrorSpy).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  it('should forward ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>();

    renderProgressBar({ ref });

    expect(ref.current).toBe(screen.getByRole('progressbar'));
  });

  it('should pass ref and custom properties to the indicator', () => {
    const ref = React.createRef<HTMLDivElement>();
    const className = 'my-indicator';

    renderProgressBar({
      children: (
        <ProgressBar.Indicator
          ref={ref}
          className={className}
          data-testid={indicatorTestId}
        />
      ),
    });

    const indicator = screen.getByTestId(indicatorTestId);

    expect(ref.current).toBe(indicator);
    expect(indicator).toHaveClass(className);
    expect(screen.getByRole('progressbar')).toContainElement(indicator);
  });
});
