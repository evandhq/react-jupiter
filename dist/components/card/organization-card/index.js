"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireDefault(require("react"));
var _titledAvatar = _interopRequireDefault(require("../../titled-avatar"));
var _numericSummeryReport = _interopRequireDefault(require("../../numeric-summery-report"));
var _button = _interopRequireDefault(require("../../button"));
var _index = _interopRequireDefault(require("./index.style"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}














const OrganizationCard = (props) => {
  const {
    title, logo, followed = false, report, onClickFollow, renderLink
  } = props;

  const reportData = [
  { id: 1, title: 'برگزار شده', count: report.heldEventsNumber },
  { id: 2, title: 'فعال', count: report.activeEventsNumber },
  { id: 3, title: 'دنبال‌کننده‌ها', count: report.followingNumber }];


  return (/*#__PURE__*/
    _react.default.createElement(_index.default, {
      direction: "vertical",
      hoverToLevel: 3,
      maxWidth: 370,
      "data-test": "organization-card" }, /*#__PURE__*/

    _react.default.createElement(_titledAvatar.default, {
      title: title,
      avatar: logo,
      renderAvatarLink: renderLink }
    ), /*#__PURE__*/
    _react.default.createElement(_numericSummeryReport.default, { data: reportData }), /*#__PURE__*/
    _react.default.createElement(_button.default, {
      styleType: followed ? 'secondary' : 'primary',
      onClick: onClickFollow,
      mainColor: "blue",
      size: "sm",
      wide: true },

    followed ? 'دنبال نکنید' : 'دنبال کنید'
    )
    ));

};var _default = exports.default =

OrganizationCard;