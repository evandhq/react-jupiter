"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _constants = require("./constants");
var _showDate = _interopRequireDefault(require("../../show-date"));
var _typography = require("../../typography");
var _titledAvatar = _interopRequireDefault(require("../../titled-avatar"));
var _eventCardLabel = _interopRequireDefault(require("./event-card-label"));
var _index = require("./index.style");
















var _icon = _interopRequireDefault(require("../../icon"));function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const finishedClockLabelUrl = 'https://static.evand.net/assets/images/other/finished-clock-label.svg';
const defaultCoverUrl = 'https://static.evand.net/assets/images/defaults/event-cover.jpg';
const EventCard = (_ref) =>



















{let { title, price, place, renderEventLink, clickBookmark, bookmarked = false, cover = '', type = _constants.VERTICAL_CARD, ads = false, finished = false, organization = undefined, renderOrganizationLink = () => false, date = '', showDate = '', partnership = { status: '' }, coverImage = null, ...rest } = _ref;
  // date param used on main evand and because it wrong to use moment-jalali in react jupiter
  // we ommmit it in evand-next and use showDate param instead but its still used in evand
  // TODO: remove date params if no longer needed (in evand project)
  // TODO: remove ShowDate component and remove used places
  // TODO: remove moment-jalali from this package after removing ShowDate

  // in new form of event-card we dont show organazation info as a titled-avatar
  // TODO: if the new form was accepted and remove old one from evand clean these parts
  const productPropertiesList = [
  { iconName: 'place', text: place },
  { iconName: 'ticket', text: price }];

  if (organization && organization.logo === 'unset') {
    productPropertiesList.push({ iconName: 'supervisor-account', text: organization.name });
  }

  const renderVerticalCard = () => /*#__PURE__*/
  _react.default.createElement(_index.VerticalCardContainer, _extends({
    direction: type,
    hoverToLevel: 3,
    maxWidth: 270 },
  rest),

  renderEventLink(coverImage || /*#__PURE__*/_react.default.createElement(_index.VerticalCover, { "data-test": "vertical-cover", src: cover || defaultCoverUrl, loading: "lazy", onError: (e) => {e.target.onerror = null;e.target.src = defaultCoverUrl;} })), /*#__PURE__*/
  _react.default.createElement(_index.VerticalContentContainer, {
    "data-test": "vertical-content",
    background: finished ? finishedClockLabelUrl : null }, /*#__PURE__*/

  _react.default.createElement("div", null, /*#__PURE__*/
  _react.default.createElement(_index.DateBookmarkContainer, { "data-test": "vertical-date-bookmark" }, /*#__PURE__*/
  _react.default.createElement(_index.DateLabelContainer, null,
  finished && /*#__PURE__*/_react.default.createElement(_eventCardLabel.default, { type: "finished" }),
  !finished && ads && /*#__PURE__*/_react.default.createElement(_eventCardLabel.default, { type: "ads" }),
  !!partnership?.status && /*#__PURE__*/
  _react.default.createElement(_index.PartnershipBox, null, /*#__PURE__*/
  _react.default.createElement(_icon.default, { name: partnership?.status, color: "yellow", stickyLeft: true, marginRight: 3 }),
  ' ',
  partnership?.status === 'colleague' ? 'همکار' : 'همیار'
  ),

  date && /*#__PURE__*/_react.default.createElement(_showDate.default, { date: date, color: "gray", fontSize: "12" }),
  showDate && /*#__PURE__*/
  _react.default.createElement(_typography.Text, { size: "12", color: "gray", "data-test": "show-date" }, showDate)

  ), /*#__PURE__*/
  _react.default.createElement(_index.BookmarkIcon, {
    name: bookmarked ? 'bookmark' : 'bookmark-border',
    size: "lg",
    color: "gray",
    onClick: clickBookmark }
  )
  ),
  renderEventLink(/*#__PURE__*/_react.default.createElement(_index.VerticalTitle, { level: 2, size: "sm" }, title)), /*#__PURE__*/
  _react.default.createElement(_index.VerticalPlacePrice, { list: productPropertiesList })
  ),
  organization && organization.logo !== 'unset' && /*#__PURE__*/
  _react.default.createElement(_titledAvatar.default, { title: organization.name, titleSize: 12, avatar: organization.logo, avatarSize: "xs", renderAvatarLink: renderOrganizationLink })

  )
  );


  const renderHorizontalCard = () => /*#__PURE__*/
  _react.default.createElement(_index.HorizontalCardContainer, _extends({
    direction: type,
    hoverToLevel: 3,
    maxWidth: 560 },
  rest),

  renderEventLink(/*#__PURE__*/_react.default.createElement(_index.HorizontalCover, { "data-test": "horizontal-cover", src: cover || defaultCoverUrl, loading: "lazy" })), /*#__PURE__*/
  _react.default.createElement(_index.HorizontalContentContainer, { "data-test": "horizontal-content" }, /*#__PURE__*/
  _react.default.createElement(_index.DateBookmarkContainer, null, /*#__PURE__*/
  _react.default.createElement(_index.DateLabelContainer, null,
  finished && /*#__PURE__*/_react.default.createElement(_eventCardLabel.default, { type: "finished" }),
  !finished && ads && /*#__PURE__*/_react.default.createElement(_eventCardLabel.default, { type: "ads" }),
  date && /*#__PURE__*/_react.default.createElement(_showDate.default, { date: date, color: "gray", fontSize: "12" }),
  showDate && /*#__PURE__*/
  _react.default.createElement(_typography.Text, { size: "12", color: "gray", "data-test": "show-date" }, showDate)

  ), /*#__PURE__*/
  _react.default.createElement(_index.BookmarkIcon, {
    name: bookmarked ? 'bookmark' : 'bookmark-border',
    size: "lg",
    color: "gray",
    onClick: clickBookmark,
    "data-test": bookmarked ? 'bookmark' : 'bookmark-border' }
  )
  ),
  renderEventLink(/*#__PURE__*/_react.default.createElement(_index.HorizontalTitle, { level: 2, size: "sm" }, title)), /*#__PURE__*/
  _react.default.createElement(_index.HorizontalPlacePrice, { list: productPropertiesList, isHorizontal: true })
  )
  );


  const renderHorizontalMobileCard = () => /*#__PURE__*/
  _react.default.createElement(_index.HorizontalCardContainer, _extends({
    direction: type,
    hoverToLevel: 3,
    maxWidth: 560 },
  rest),

  renderEventLink(/*#__PURE__*/_react.default.createElement(_index.HorizontalMobileCover, { "data-test": "horizontal-mobile-cover", src: cover || defaultCoverUrl, loading: "lazy" })), /*#__PURE__*/
  _react.default.createElement(_index.HorizontalContentContainer, { "data-test": "horizontal-content" }, /*#__PURE__*/
  _react.default.createElement(_index.DateBookmarkContainer, null, /*#__PURE__*/
  _react.default.createElement(_index.DateLabelContainer, null,
  finished && /*#__PURE__*/_react.default.createElement(_eventCardLabel.default, { type: "finished" }),
  !finished && ads && /*#__PURE__*/_react.default.createElement(_eventCardLabel.default, { type: "ads" }),
  date && /*#__PURE__*/_react.default.createElement(_showDate.default, { date: date, color: "gray", fontSize: "10" }),
  showDate && /*#__PURE__*/
  _react.default.createElement(_typography.Text, { size: "10", color: "gray", "data-test": "show-date" }, showDate)

  ), /*#__PURE__*/
  _react.default.createElement(_index.BookmarkIcon, {
    name: bookmarked ? 'bookmark' : 'bookmark-border',
    size: "sm",
    color: "gray",
    onClick: clickBookmark,
    "data-test": bookmarked ? 'bookmark' : 'bookmark-border' }
  )
  ),
  renderEventLink(/*#__PURE__*/_react.default.createElement(_index.HorizontalTitle, { level: 4, size: "sm" }, title)), /*#__PURE__*/
  _react.default.createElement(_index.HorizontalPlacePrice, { list: productPropertiesList, isHorizontal: true })
  )
  );


  const renderCard = () => {
    switch (type) {
      case _constants.HORIZONTAL_CARD:
        return renderHorizontalCard();
      case _constants.HORIZONTAL_MOBILE_CARD:
        return renderHorizontalMobileCard();
      case _constants.VERTICAL_CARD:
      default:
        return renderVerticalCard();
    }
  };

  return (/*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null),
    renderCard()
    ));

};

EventCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  bookmarked: _propTypes.default.bool,
  type: _propTypes.default.string,
  price: _propTypes.default.string.isRequired,
  place: _propTypes.default.string.isRequired,
  date: _propTypes.default.oneOfType([
  _propTypes.default.string,
  _propTypes.default.object]
  ),
  showDate: _propTypes.default.string,
  cover: _propTypes.default.string,
  ads: _propTypes.default.bool,
  finished: _propTypes.default.bool,
  organization: (0, _propTypes.oneOfType)([
  _propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    logo: _propTypes.default.string
  }),
  _propTypes.default.undefined]
  ),
  renderEventLink: _propTypes.default.func.isRequired,
  renderOrganizationLink: _propTypes.default.func,
  clickBookmark: _propTypes.default.func.isRequired,
  partnership: _propTypes.default.shape({
    status: _propTypes.default.string
  }),
  coverImage: _propTypes.default.node || null
};var _default = exports.default =

EventCard;