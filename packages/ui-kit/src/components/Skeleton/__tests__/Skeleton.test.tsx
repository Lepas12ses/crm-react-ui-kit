import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';

import { Skeleton, SkeletonPrimaryTheme } from '..';

import '@testing-library/jest-dom';

const DATA_COMPONENT_TEST_ID = 'Skeleton';
const DATA_CHILDREN_TEST_ID = 'SkeletonChildren';

describe('Skeleton', () => {
  it('should be defined', () => {
    expect(Skeleton).toBeDefined();
  });

  it('should render an empty block span with width and height', () => {
    render(
      <Skeleton
        theme={SkeletonPrimaryTheme}
        width="120px"
        height="1rem"
        data-testid={DATA_COMPONENT_TEST_ID}
      />
    );

    const element = screen.getByTestId(DATA_COMPONENT_TEST_ID);

    expect(element.tagName).toBe('SPAN');
    expect(element).toBeEmptyDOMElement();
    expect(element).toHaveClass('empty');
    expect(element.style.width).toBe('120px');
    expect(element.style.height).toBe('1rem');
  });

  it('should render the child element as the root without a wrapper', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(
      <Skeleton
        theme={SkeletonPrimaryTheme}
        ref={ref}
        className="skeleton-class"
        style={{ color: 'red' }}
        width="100px"
      >
        <button
          type="button"
          data-testid={DATA_CHILDREN_TEST_ID}
          className="child-class"
          style={{ width: 50 }}
        >
          Submit
        </button>
      </Skeleton>
    );

    const element = screen.getByTestId(DATA_CHILDREN_TEST_ID);

    expect(container.firstChild).toBe(element);
    expect(ref.current).toBe(element);
    expect(element).toHaveClass('skeleton-class', 'child-class');
    expect(element).not.toHaveClass('empty');
    expect(element.style.color).toBe('red');
    expect(element.style.width).toBe('50px');
  });

  it('should render only children when not loading', () => {
    const { container } = render(
      <Skeleton
        theme={SkeletonPrimaryTheme}
        isLoading={false}
        className="skeleton-class"
        data-testid={DATA_COMPONENT_TEST_ID}
      >
        <p data-testid={DATA_CHILDREN_TEST_ID}>Content</p>
      </Skeleton>
    );

    const element = screen.getByTestId(DATA_CHILDREN_TEST_ID);

    expect(container.firstChild).toBe(element);
    expect(
      screen.queryByTestId(DATA_COMPONENT_TEST_ID)
    ).not.toBeInTheDocument();
    expect(element).not.toHaveClass('skeleton-class');
    expect(element).not.toHaveAttribute('aria-hidden');
  });

  it('should hide the root from assistive technologies and Tab navigation', () => {
    render(
      <Skeleton theme={SkeletonPrimaryTheme}>
        <button type="button" data-testid={DATA_CHILDREN_TEST_ID}>
          Submit
        </button>
      </Skeleton>
    );

    const element = screen.getByTestId(DATA_CHILDREN_TEST_ID);

    expect(element).toHaveAttribute('aria-hidden', 'true');
    expect(element).toHaveAttribute('tabindex', '-1');
  });

  it('should pass className, style and ref to the root', () => {
    const ref = createRef<HTMLElement>();

    render(
      <Skeleton
        theme={SkeletonPrimaryTheme}
        ref={ref}
        className="my-class"
        style={{ color: 'red' }}
        data-testid={DATA_COMPONENT_TEST_ID}
      />
    );

    const element = screen.getByTestId(DATA_COMPONENT_TEST_ID);

    expect(ref.current).toBe(element);
    expect(element).toHaveClass('my-class');
    expect(element.style.color).toBe('red');
  });
});
