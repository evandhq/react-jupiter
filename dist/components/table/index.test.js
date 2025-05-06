"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
require("jest-styled-components");
var _test = _interopRequireDefault(require("../utils/test"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const defaultColumns = [
{
  key: 'firstTitle',
  label: 'عنوان اول',
  dataType: 'text'
}];

const defaultData = [
{
  key: 'firstRow',
  firstTitle: 'سارا'
}];


const setupMount = function () {let columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColumns;let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultData;return (
    (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_index.default, { columns: columns, data: data })));};


describe('Table Tests', () => {
  it('render table and display minimal data properly', () => {
    const component = setupMount();
    const Table = (0, _test.default)(component, 'jupiter-table');

    expect(Table.length).not.toBe(0);
    expect(Table.find('thead tr').childAt(0).text()).toBe('عنوان اول');
    expect(Table.find('tbody tr').childAt(0).text()).toBe('سارا');
  });

  it('render table header', () => {
    const columns = [
    {
      key: 'firstTitle',
      label: 'عنوان اول',
      dataType: 'text'
    },
    {
      key: 'secoundTitle',
      label: 'عنوان دوم',
      dataType: 'text'
    },
    {
      key: 'tirdTitle',
      label: 'عنوان سوم اینجا قرار می گیرد',
      dataType: 'node'
    },
    {
      key: 'forthTitle',
      label: 'عنوان چهارم',
      dataType: 'text'
    }];

    const component = setupMount(columns);
    const Table = (0, _test.default)(component, 'jupiter-table');

    expect(Table.find('thead tr').childAt(0).text()).toBe('عنوان اول');
    expect(Table.find('thead tr').childAt(1).text()).toBe('عنوان دوم');
    expect(Table.find('thead tr').childAt(2).text()).toBe('عنوان سوم اینجا قرار می گیرد');
    expect(Table.find('thead tr').childAt(3).text()).toBe('عنوان چهارم');
  });

  it('render table body proparely', () => {
    const columns = [
    {
      key: 'firstTitle',
      label: 'نام',
      dataType: 'text'
    },
    {
      key: 'secoundTitle',
      label: 'نام خانوادگی',
      dataType: 'text'
    },
    {
      key: 'tirdTitle',
      label: 'سمت',
      dataType: 'node'
    },
    {
      key: 'forthTitle',
      label: 'سن',
      dataType: 'text'
    }];

    const data = [
    {
      key: 'firstRow',
      firstTitle: 'سارا',
      tirdTitle: 'مدیر بازرگانی',
      wrongTitle: '۳۰ ساله',
      secoundTitle: 'احمدی'
    },
    {
      key: 'the2ndRow',
      firstTitle: 'احمد',
      secoundTitle: 'نایینی',
      tirdTitle: 'آبدارجی',
      forthTitle: '۵۵ ساله'
    },
    {
      key: 'the3hRow',
      firstTitle: 'زهرا',
      secoundTitle: 'زنگنه',
      tirdTitle: 'مدیر فروش',
      forthTitle: '۲۰ ساله'
    }];

    const component = setupMount(columns, data);
    const Table = (0, _test.default)(component, 'jupiter-table');

    expect(Table.find('tbody').childAt(0).text()).toBe('سارااحمدیمدیر بازرگانی-');
    expect(Table.find('tbody').childAt(1).text()).toBe('احمدنایینیآبدارجی۵۵ ساله');
  });
});