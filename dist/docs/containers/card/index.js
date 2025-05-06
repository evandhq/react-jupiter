"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _components = require("../../../components");
var _showDate = _interopRequireDefault(require("../../../components/show-date"));
var _cardTemplate = _interopRequireDefault(require("../../../components/card/card-template"));
var _card = require("../../../components/card");
var _titledAvatar = _interopRequireDefault(require("../../../components/titled-avatar"));
var _organizationCard = _interopRequireDefault(require("../../../components/card/organization-card"));
var _numericSummeryReport = _interopRequireDefault(require("../../../components/numeric-summery-report"));
var _responsive = _interopRequireDefault(require("../../../components/responsive"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const { Heading } = _components.Typography;

const CardPage = () => /*#__PURE__*/
_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
_react.default.createElement(Heading, { level: 1 }, "\u06A9\u0627\u0631\u062A"

), /*#__PURE__*/
_react.default.createElement(_showDate.default, { date: new Date() }), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_responsive.default, { option: { greaterThan: 1200 } }, /*#__PURE__*/_react.default.createElement("h1", null, "Show from to 1200px")), /*#__PURE__*/
_react.default.createElement(_responsive.default, { option: { lessThan: 1200 } }, /*#__PURE__*/_react.default.createElement("h1", null, "Show up to 1200px")), /*#__PURE__*/
_react.default.createElement(_responsive.default, { option: { greaterThan: 900 } }, /*#__PURE__*/_react.default.createElement("h1", null, "Show from 900px")), /*#__PURE__*/
_react.default.createElement(_responsive.default, { option: { greaterThan: 700, lessThan: 900 } }, /*#__PURE__*/
_react.default.createElement("h1", null, "Show from 700px up to 900px")
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_card.EventCard, {
  type: "vertical",
  title: "\u062A\u0627\u06CC\u062A\u0644 \u06CC\u06A9 \u0631\u0648\u06CC\u062F\u0627\u062F \u0646\u0633\u0628\u062A\u0627 \u0637\u0648\u0644\u0627\u0646\u06CC \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627\u0633\u062A \u06A9\u0647 \u0642\u0631\u0627\u0631 \u0627\u0633\u062A \u0627\u0636\u0627\u0641\u0647 \u0628\u06CC\u0627\u06CC\u062F \u0648 \u0628\u0632\u0646\u062F \u0628\u0647 \u0628\u06CC\u0631\u0648\u0646",
  cover: "https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg",
  date: "2020-01-10T14:00:00+0330",
  place: "\u062A\u0647\u0631\u0627\u0646",
  price: "\u0627\u0632 \u06F4\u06F4\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646",
  ads: true,
  finished: true,
  organization: {
    name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
    logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg'
  },
  clickBookmark: () => {window.console.log('handle click bookmark');return true;},
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_card.EventCard, {
  type: "vertical",
  title: "\u062A\u0627\u06CC\u062A\u0644 \u06CC\u06A9 \u0631\u0648\u06CC\u062F\u0627\u062F \u0627\u06CC\u0646\u062C\u0627\u0633\u062A \u06A9\u0647\u0646",
  date: "2020-01-10T14:00:00+0330",
  place: "\u062A\u0647\u0631\u0627\u0646",
  price: "\u0627\u0632 \u06F4\u06F4\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646",
  ads: true,
  organization: {
    name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
    logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg'
  },
  clickBookmark: () => {window.console.log('handle click bookmark');return true;},
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element),
  renderOrganizationLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/toorganization" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_numericSummeryReport.default, {
  data: [
  { id: 1, title: 'برگزار شده', count: 12 },
  { id: 2, title: 'فعال', count: 2 },
  { id: 3, title: 'دنبال کننده‌ها', count: 346 }] }

), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(_card.EventCard, {
  type: "horizontal",
  title: "\u062A\u0627\u06CC\u062A\u0644 \u06CC\u06A9 \u0631\u0648\u06CC\u062F\u0627\u062F \u0646\u0633\u0628\u062A\u0627 \u0637\u0648\u0644\u0627\u0646\u06CC \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627\u0633\u062A \u06A9\u0647 \u0628\u0627\u06CC\u062F \u0648 \u0628\u0627\u06CC\u062F \u0648 \u0642\u0631\u0627\u0631 \u0627\u0633\u062A \u0627\u0636\u0627\u0641\u0647 \u0628\u06CC\u0627\u06CC\u062F \u0648 \u0628\u0632\u0646\u062F \u0628\u0647 \u0628\u06CC\u0631\u0648\u0646",
  cover: "https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg",
  date: "2020-01-10T14:00:00+0330",
  place: "\u062A\u0647\u0631\u0627\u0646",
  price: "\u0627\u0632 \u06F4\u06F4\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646",
  ads: true,
  clickBookmark: () => {window.console.log('handle click bookmark');},
  queryString: "icn=trendEvents&ici=fp5",
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewhere" }, element) }
), /*#__PURE__*/
_react.default.createElement(_card.EventCard, {
  type: "horizontal",
  title: "\u062A\u0627\u06CC\u062A\u0644 \u06CC\u06A9 \u0631\u0648\u06CC\u062F\u0627\u062F \u0646\u0633\u0628\u062A\u0627 \u0637\u0648\u0644\u0627\u0646\u06CC \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627\u0633\u062A \u06A9\u0647 \u0628\u0627\u06CC\u062F \u0648 \u0628\u0627\u06CC\u062F \u0648 \u0642\u0631\u0627\u0631 \u0627\u0633\u062A \u0627\u0636\u0627\u0641\u0647 \u0628\u06CC\u0627\u06CC\u062F \u0648 \u0628\u0632\u0646\u062F \u0628\u0647 \u0628\u06CC\u0631\u0648\u0646",
  date: "2020-01-10T14:00:00+0330",
  place: "\u062A\u0647\u0631\u0627\u0646",
  price: "\u0627\u0632 \u06F4\u06F4\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646",
  finished: true,
  clickBookmark: () => {window.console.log('handle click bookmark');},
  queryString: "icn=trendEvents&ici=fp5",
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewhere" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_cardTemplate.default, { hoverToLevel: 2 }, /*#__PURE__*/_react.default.createElement("div", null, "Hello card template.")), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_cardTemplate.default, { level: 2, hoverToLevel: 4 }, /*#__PURE__*/_react.default.createElement("div", null, "Hello card template.")), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_cardTemplate.default, { level: 3, maxWidth: "400", renderLink: (el) => /*#__PURE__*/_react.default.createElement("a", { href: "http://google.com" }, el), hoverToLevel: 4 }, /*#__PURE__*/
_react.default.createElement("div", null, /*#__PURE__*/
_react.default.createElement(Heading, null, "Hello card template. Hello card template.Hello card template.")
)
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_cardTemplate.default, { level: 4 }, /*#__PURE__*/_react.default.createElement("div", null, "Hello card template.")), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_cardTemplate.default, { level: 5 }, /*#__PURE__*/_react.default.createElement("div", null, "Hello card template.")), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/

_react.default.createElement(_titledAvatar.default, {
  title: "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC",

  avatar: "https://static.evand.net/images/organizations/logos/original/96f2fd0f4770552bf2d14db5b51f4013.jpg?x-oss-process=image/resize,h_250",
  avatarSize: "sm",
  titleSize: 10,
  renderAvatarLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_titledAvatar.default, {
  title: "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC",

  avatar: "https://static.evand.net/images/organizations/logos/original/96f2fd0f4770552bf2d14db5b51f4013.jpg?x-oss-process=image/resize,h_250",
  renderAvatarLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/tosomewherenew" }, element) }
), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement("br", null), /*#__PURE__*/
_react.default.createElement(_organizationCard.default, {
  title: "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647",
  logo: "https://static.evand.net/images/organizations/logos/original/d431e339d86b187f356055f1d6f39ddb.jpg?x-oss-process=image/resize,h_250",
  report: {
    heldEventsNumber: 2,
    activeEventsNumber: 17,
    followingNumber: 148
  },
  onClickFollow: () => {window.console.log('click on follow');},
  renderLink: (element) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, { to: "/somewhere" }, element) }
)
);var _default = exports.default =


CardPage;