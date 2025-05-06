"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../utils/test"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { price: '۵۰۰۰ تومن' };return (
    (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ data: props.data }, props))));};


const setupMount = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { price: '۵۰۰۰ تومن' };return (
    (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ data: props.data }, props))));};


describe('file-item test', () => {
  it('file item existance', () => {
    const component = setupShallow();
    const TheFileItem = (0, _test.default)(component, 'file-item');

    expect(TheFileItem.length).toBe(1);
  });

  it('file item should have related image', () => {
    const component = setupMount({ type: 'doc' });
    const TheDocFileImage = component.find(".icon-doc-light[data-test='file-image']");
    const TheZipFileImage = component.find(".icon-zip-light[data-test='file-image']");

    expect(TheDocFileImage.length).not.toBe(0);
    expect(TheZipFileImage.length).toBe(0);
  });

  it('file item should have title with spesefic size and bold', () => {
    const component = setupShallow();
    const Title = (0, _test.default)(component, 'file-item-title');

    expect(Title.length).toBe(1);
    expect(Title.props().size).toBe(14);
    expect(Title.props().bold).toBe(true);
  });

  it('file item should have title as the same of what we passed', () => {
    const component = setupShallow({ title: 'فایل های کاربردی' });
    const Title = (0, _test.default)(component, 'file-item-title');

    expect(Title.props().children).toBe('فایل های کاربردی');
  });

  it('file item could have description with spesefic size and bold', () => {
    const component = setupShallow({ description: 'این توضیحات فرضی' });
    const Desc = (0, _test.default)(component, 'file-item-desc');

    expect(Desc.length).toBe(1);
    expect(Desc.props().size).toBe(10);
    expect(Desc.props().bold).toBe(true);
  });

  it('file item should disply only if it has the description prop and initial with that value', () => {
    const componentWithoutDesc = setupShallow();
    const componentWithDesc = setupShallow({ description: 'این توضیحات فرضی' });
    const DescInComp01 = (0, _test.default)(componentWithoutDesc, 'file-item-desc');
    const DescInComp02 = (0, _test.default)(componentWithDesc, 'file-item-desc');

    expect(DescInComp01.length).toBe(0);
    expect(DescInComp02.length).toBe(1);
    expect(DescInComp02.props().children).toBe('این توضیحات فرضی');
  });

  it('file item must have price with spesefic size and initial with that value', () => {
    const component = setupShallow({ price: '۶۰۰۰ تومن' });
    const Price = (0, _test.default)(component, 'file-item-price');

    expect(Price.length).toBe(1);
    expect(Price.props().children).toBe('۶۰۰۰ تومن');
    expect(Price.props().size).toBe(10);
  });

  it('file item could have fileSize with spesefic size and bold', () => {
    const component = setupShallow({ fileSize: '۷ مگابایت' });
    const FileSize = (0, _test.default)(component, 'file-item-size');

    expect(FileSize.length).toBe(1);
    expect(FileSize.props().size).toBe(10);
  });

  it('file item should disply fileSize only if it has the prop and initial with that value', () => {
    const componentWithoutFileSize = setupShallow();
    const componentWithFileSize = setupShallow({ fileSize: '۷ مگابایت' });
    const FileSizeInComp01 = (0, _test.default)(componentWithoutFileSize, 'file-item-size');
    const FileSizeInComp02 = (0, _test.default)(componentWithFileSize, 'file-item-size');

    expect(FileSizeInComp01.length).toBe(0);
    expect(FileSizeInComp02.length).toBe(1);
    expect(FileSizeInComp02.props().children).toBe('۷ مگابایت');
  });

  it('file item must response to onClick function', () => {
    let flag = false;
    function clickSample() {
      flag = true;
    }
    const component = setupMount({ onClick: clickSample });

    expect(flag).toBe(false);
    component.simulate('click');
    expect(flag).toBe(true);
  });
});