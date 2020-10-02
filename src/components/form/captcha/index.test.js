import React from 'react';
import { shallow } from 'enzyme';
import findByTestAtrr from '../../utils/test';
import Captcha from './index';

describe('captcha', () => {
  it('render captcha box', () => {
    const component = shallow(<Captcha src="wrong-src" />);
    const chaptchaBox = findByTestAtrr(component, 'captcha-box');

    expect(chaptchaBox.length).toBe(1);
  });
  it('render captcha input', () => {
    const component = shallow(<Captcha src="wrong-src" />);
    const chaptchaInput = findByTestAtrr(component, 'captcha-input');

    expect(chaptchaInput.length).toBe(1);
  });
  it('render captcha img', () => {
    const component = shallow(<Captcha src="wrong-src" />);
    const chaptchaImg = findByTestAtrr(component, 'captcha-img');

    expect(chaptchaImg.length).toBe(1);
  });
});
