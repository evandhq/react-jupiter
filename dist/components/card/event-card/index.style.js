"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.VerticalTitle = exports.VerticalPlacePrice = exports.VerticalCover = exports.VerticalContentContainer = exports.VerticalCardContainer = exports.PartnershipBox = exports.Link = exports.HorizontalTitle = exports.HorizontalPlacePrice = exports.HorizontalMobileCover = exports.HorizontalMobileContentContainer = exports.HorizontalCover = exports.HorizontalContentContainer = exports.HorizontalCardContainer = exports.DateLabelContainer = exports.DateBookmarkContainer = exports.BookmarkIcon = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _cardTemplate = _interopRequireDefault(require("../card-template"));
var _typography = require("../../typography");
var _productProperties = _interopRequireDefault(require("../../product-properties"));
var _icon = _interopRequireDefault(require("../../icon"));
var _themes = _interopRequireDefault(require("../../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

/* Common event card styles */

const Link = exports.Link = _styledComponents.default.a`
  text-decoration: none;
`;

const DateBookmarkContainer = exports.DateBookmarkContainer = _styledComponents.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DateLabelContainer = exports.DateLabelContainer = _styledComponents.default.div`
  display: inline-block;
  & > * {
    vertical-align:middle;
  }
`;

const BookmarkIcon = exports.BookmarkIcon = (0, _styledComponents.default)(_icon.default)`
  margin-left: 0;
  &:hover {
    cursor: pointer;
  }
`;

/* Vertical event card styles */
const VerticalCardContainer = exports.VerticalCardContainer = (0, _styledComponents.default)(_cardTemplate.default)`
  background: white;
  a {
    text-decoration: none;
  }
  @media only screen and (min-width: ${_themes.default.breakpoints.sm}px) {
    min-height: 358px;
  }
`;

const VerticalCover = exports.VerticalCover = _styledComponents.default.img`
  width: 100%;
  min-width: 270px;
  height: auto;
  min-height: 150px;
`;

const VerticalContentContainer = exports.VerticalContentContainer = _styledComponents.default.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 16px 16px;
  min-height: 180px;
  max-height: 200px;
  direction: rtl;
  text-align: right;
`;

const VerticalTitle = exports.VerticalTitle = (0, _styledComponents.default)(_typography.Heading)`
  margin: 0;
  overflow: hidden;
  height: 60px;
`;

const VerticalPlacePrice = exports.VerticalPlacePrice = (0, _styledComponents.default)(_productProperties.default)`
  margin: 4px 0;
`;

/* Horizontal event card styles */

const HorizontalCardContainer = exports.HorizontalCardContainer = (0, _styledComponents.default)(VerticalCardContainer)`
  height: 116px;
`;

const HorizontalCover = exports.HorizontalCover = _styledComponents.default.img`
  width: 206px;
  min-width: 206px;
  height: auto;
`;

const HorizontalMobileCover = exports.HorizontalMobileCover = _styledComponents.default.img`
  width: 146px;
  min-width: 146px;
  height: 100%;
`;

const HorizontalContentContainer = exports.HorizontalContentContainer = _styledComponents.default.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  flex: 1;
  min-width: 250px;
`;

const HorizontalMobileContentContainer = exports.HorizontalMobileContentContainer = _styledComponents.default.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  flex: 1;
  min-width: 0px;
`;

const HorizontalTitle = exports.HorizontalTitle = (0, _styledComponents.default)(_typography.Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HorizontalPlacePrice = exports.HorizontalPlacePrice = (0, _styledComponents.default)(_productProperties.default)``;

const PartnershipBox = exports.PartnershipBox = _styledComponents.default.div`
  background: #FFC72724;
  border-radius: 5px;
  margin-left: 5px;
  color: #FFD324;
  display: inline-flex;
  align-items: center;
  min-width: 60px;
  height: 25px;
  justify-content: center;
`;