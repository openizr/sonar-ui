/**
 * Copyright (c) Matthieu Jabbour. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { mount } from '@vue/test-utils';
import UICheckbox from 'scripts/vue/Checkbox.vue';

type component = any; // eslint-disable-line @typescript-eslint/no-explicit-any

jest.mock('scripts/helpers/markdown');
jest.mock('scripts/helpers/generateRandomId');
const options: { value: string; label: string; disabled?: boolean; }[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

describe('vue/UICheckbox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly - basic', async () => {
    const wrapper = mount(UICheckbox, {
      propsData: { name: 'test', options, modifiers: 'large' },
    });
    wrapper.setProps({ value: ['option1'] });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correctly - with id', () => {
    const wrapper = mount(UICheckbox, {
      propsData: { name: 'test', options, id: 'test' },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correctly - with label', () => {
    const wrapper = mount(UICheckbox, {
      propsData: { name: 'test', options, label: 'Test' },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correctly - with helper', () => {
    const wrapper = mount(UICheckbox, {
      propsData: { name: 'test', options, helper: 'Test' },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correctly - with value', () => {
    const wrapper = mount(UICheckbox, {
      propsData: { name: 'test', options, value: ['option1', 'option3'] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correctly - disabled', () => {
    const wrapper = mount(UICheckbox, {
      propsData: { name: 'test', options, modifiers: 'disabled' },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correctly - with option disabled', () => {
    const wrapper = mount(UICheckbox, {
      propsData: { name: 'test', options: [{ value: 'option5', label: 'Option 5', disabled: true }] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correctly - with listeners', async () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const wrapper = mount(UICheckbox, {
      propsData: {
        name: 'test', options, value: ['option2'],
      },
      listeners: {
        focus: onFocus,
        change: onChange,
      },
    });
    await (wrapper.vm as component).focusField('option1');
    wrapper.find('input').setChecked(true);
    expect(wrapper.html()).toMatchSnapshot();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledWith('option1');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(['option2', 'option1']);
  });
});
