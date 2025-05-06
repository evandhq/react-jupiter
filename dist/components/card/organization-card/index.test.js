"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../../utils/test"));
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const setupShallow = function () {let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return (
    (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, _extends({ data: props.data }, props))));};


describe('should render correctly', () => {
  it('should render correctly', () => {
    const component = setupShallow({
      title: 'انجمن علمی کامپیوتر دانشگاه صنعتی خواجه',
      logo: 'https://static.evand.net/images/organizations/logos/original/d431e339d86b187f356055f1d6f39ddb.jpg?x-oss-process=image/resize,h_250',
      report: {
        heldEventsNumber: 2,
        activeEventsNumber: 17,
        followingNumber: 148
      },
      onClickFollow: () => {window.console.log('handle click follow');}
    });
    const OrganizationCard = (0, _test.default)(component, 'organization-card');
    expect(OrganizationCard.length).toBe(1);
  });
});