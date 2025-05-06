"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _reactRouterDom = require("react-router-dom");
var _index = _interopRequireDefault(require("./index"));
var _constants = require("./constants");
var _test = _interopRequireDefault(require("../../utils/test"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupMount = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.mount)(/*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_index.default, _extends({ level: props.level }, props)))));};


describe('Event Card', () => {
  it('should render default vertical event card', () => {
    const VerticalCard = setupMount({
      type: _constants.VERTICAL_CARD,
      title: 'تایتل یک رویداد نسبتا طولانی در اینجاست که قرار است اضافه بیاید و بزند به بیرون',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      date: '2020-01-10T14:00:00+0330',
      place: 'تهران',
      price: 'از ۴۴۰۰۰ تومان',
      organization: {
        logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
        name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه'
      },
      onClickBookmark: () => {window.console.log('handle click bookmark');},
      renderEventLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element),
      renderOrganizationLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element)
    });
    const VerticalCover = (0, _test.default)(VerticalCard.find('img'), 'vertical-cover');
    const VerticalContent = (0, _test.default)(VerticalCard.find('div'), 'vertical-content');
    expect(VerticalCover.length).toBe(1);
    expect(VerticalContent.length).toBe(1);
    VerticalCard.unmount();
  });

  it('should render horizontal event card', () => {
    const HorizontalCard = setupMount({
      type: _constants.HORIZONTAL_CARD,
      title: 'نام رویداد مورد نظر',
      price: 'از ۲۰۰۰۰۰ تومان',
      location: 'تهران',
      date: '2020-01-10T14:00:00+0330',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      renderEventLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element)
    });
    const HorizontalCover = (0, _test.default)(HorizontalCard.find('img'), 'horizontal-cover');
    const HorizontalContent = (0, _test.default)(HorizontalCard.find('div'), 'horizontal-content');
    expect(HorizontalCover.length).toBe(1);
    expect(HorizontalContent.length).toBe(1);
    HorizontalCard.unmount();
  });

  it('should act correctly on clicking on bookmark icon', () => {
    const fn = jest.fn();
    const VerticalCard = setupMount({
      type: _constants.VERTICAL_CARD,
      title: 'تایتل یک رویداد نسبتا طولانی در اینجاست که قرار است اضافه بیاید و بزند به بیرون',
      cover: 'https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg',
      date: '2020-01-10T14:00:00+0330',
      place: 'تهران',
      price: 'از ۴۴۰۰۰ تومان',
      onClickBookmark: fn,
      organization: {
        logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
        name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه'
      },
      renderEventLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element),
      renderOrganizationLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element)
    });
    const Bookmark = (0, _test.default)(VerticalCard, 'vertical-date-bookmark').find('i[name="bookmark-border"]');
    expect(Bookmark.length).toBe(1);
    Bookmark.simulate('click');
    const NewBookmark = (0, _test.default)(VerticalCard, 'vertical-date-bookmark').find('i[name="bookmark-border"]');
    expect(NewBookmark.length).toBe(0);
    const Bookmarked = (0, _test.default)(VerticalCard, 'vertical-date-bookmark').find('i[name="bookmark"]');
    expect(Bookmarked.length).toBe(1);
    VerticalCard.unmount();
  });
});