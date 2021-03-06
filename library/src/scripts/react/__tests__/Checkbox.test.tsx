/**
 * Copyright (c) Matthieu Jabbour. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import UICheckbox from 'scripts/react/Checkbox';
import { render, unmountComponentAtNode } from 'react-dom';

let container = document.createElement('div');
jest.mock('scripts/helpers/markdown');
jest.mock('scripts/helpers/generateRandomId');
const options: { value: string; label: string; disabled?: boolean; }[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

describe('react/UICheckbox', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.clearAllMocks();
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    ((container as unknown) as null) = null;
  });

  test('renders correctly - basic', () => {
    act(() => {
      render(<UICheckbox name="test" modifiers="large" options={options} />, container);
    });
    const input = document.querySelector('input') as HTMLInputElement;
    act(() => {
      Simulate.focus(input);
    });
    act(() => {
      Simulate.change(input);
    });
    act(() => {
      Simulate.change(input);
    });
    expect(container).toMatchSnapshot();
  });

  test('renders correctly - with id', () => {
    act(() => {
      render(<UICheckbox name="test" id="test" options={options} />, container);
    });
    expect(container).toMatchSnapshot();
  });

  test('renders correctly - with label', () => {
    act(() => {
      render(<UICheckbox name="test" label="test" options={options} />, container);
    });
    expect(container).toMatchSnapshot();
  });

  test('renders correctly - with helper', () => {
    act(() => {
      render(<UICheckbox name="test" helper="test" options={options} />, container);
    });
    expect(container).toMatchSnapshot();
  });

  test('renders correctly - with value', () => {
    act(() => {
      render(<UICheckbox name="test" value={['option1', 'option3']} options={options} />, container);
    });
    expect(container).toMatchSnapshot();
  });

  test('renders correctly - disabled', () => {
    act(() => {
      render(<UICheckbox name="test" options={options} modifiers="disabled" />, container);
    });
    expect(container).toMatchSnapshot();
  });

  test('renders correctly - with option disabled', () => {
    act(() => {
      render(
        <UICheckbox
          name="test"
          options={[{ value: 'option5', label: 'Option 5', disabled: true }]}
        />,
        container,
      );
    });
    expect(container).toMatchSnapshot();
  });

  test('renders correctly - with listeners', () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    act(() => {
      render(
        <UICheckbox
          name="test"
          value={['option2']}
          options={options}
          onChange={onChange}
          onFocus={onFocus}
        />,
        container,
      );
    });
    const input = document.querySelector('input') as HTMLInputElement;
    act(() => {
      Simulate.focus(input);
    });
    act(() => {
      Simulate.change(input);
    });
    expect(container).toMatchSnapshot();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledWith('option1');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(['option2', 'option1']);
  });
});
