"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _typography = require("../../typography");
var _buttons = _interopRequireDefault(require("./buttons"));
var _index = require("./index.style");




var _display = _interopRequireDefault(require("../../display"));
var _icon = _interopRequireDefault(require("../../icon"));
var _avatar = _interopRequireDefault(require("../../avatar"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}
















const OrgnizerCard = (props) => {
  const {
    name,
    logo,
    renderOrganizerLink,
    partnership,
    isFollowed = false,
    onClickFollowMe = () => false,
    onClickConnectUs = () => {},
    allEventsCount = null,
    activeEventsCount = null,
    recommendedCount = null,
    description = null,
    followersCount = ''
  } = props;

  return (/*#__PURE__*/
    _react.default.createElement(_index.Container, { className: "organizer-card" }, /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "flex", flexDirection: "row", flexDirectionMobile: "column", alignItems: "start", justifyContent: "space-between" }, /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "flex", flexDirection: "row", flexDirectionMobile: "column", justifyContent: "start", width: "100%", flex: "4 1" }, /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "flex", flex: "1 1", className: "avatar" },
    renderOrganizerLink(/*#__PURE__*/_react.default.createElement(_avatar.default, {
      alt: name,
      src: logo,
      size: "md",
      sizeMobile: "lg",
      round: true,
      width: 64,
      height: 64 }
    ))
    ), /*#__PURE__*/
    _react.default.createElement("div", { className: "mr" }, /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "flex", alignItems: "baseline" },
    renderOrganizerLink(/*#__PURE__*/
      _react.default.createElement(_typography.Text, { size: 14, textAlign: "right", bold: true }, "\u0628\u0631\u06AF\u0632\u0627\u0631\u200C\u06A9\u0646\u0646\u062F\u0647:",

      ' ',
      name
      )
    )
    ),
    !!partnership && /*#__PURE__*/

    _react.default.createElement(_index.PartnershipBox, null, /*#__PURE__*/
    _react.default.createElement(_icon.default, {
      name: partnership,
      color: "yellow",
      stickyRight: true }
    ), /*#__PURE__*/
    _react.default.createElement("span", null,
    partnership === 'partner' ? 'همیار' : 'همکار',
    ' ', "\u0627\u06CC\u0648\u0646\u062F"

    )
    ),

    description && /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "flex" }, /*#__PURE__*/
    _react.default.createElement(_typography.Paragraph, { size: 12, color: "riverBed" },
    description.slice(0, 350).concat('...')
    )
    ),

    !!recommendedCount && /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: "14", bold: true, color: "riverBed", className: "recommend" },
    ` ${recommendedCount} `, "\u0627\u06CC\u0646 \u0628\u0631\u06AF\u0632\u0627\u0631\u06A9\u0646\u0646\u062F\u0647 \u0631\u0627 \u062A\u0648\u0635\u06CC\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u0646\u062F."

    )

    )
    ), /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "flex", alignItems: "start", flexDirection: "column", justifyContent: "space-between", width: "100%", flex: "2 1", alignSelf: "stretch" }, /*#__PURE__*/
    _react.default.createElement(_display.default, { className: "statistics", display: "flex", alignItems: "start", flexDirection: "row", justifyContent: "space-evenly", width: "100%" },
    followersCount && /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "block" }, /*#__PURE__*/
    _react.default.createElement(_index.TextCenter, null, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 16, bold: true },
    followersCount
    ), /*#__PURE__*/
    _react.default.createElement("br", null), /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 12, bold: true }, "\u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u0646\u062F\u0647"

    )
    )
    ),

    allEventsCount && /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "block" }, /*#__PURE__*/
    _react.default.createElement(_index.TextCenter, null, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 16, bold: true },
    allEventsCount
    ), /*#__PURE__*/
    _react.default.createElement("br", null), /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 12, bold: true }, "\u06A9\u0644 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627"

    )
    )
    ),

    activeEventsCount && /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "block" }, /*#__PURE__*/
    _react.default.createElement(_index.TextCenter, null, /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 16, bold: true },
    activeEventsCount
    ), /*#__PURE__*/
    _react.default.createElement("br", null), /*#__PURE__*/
    _react.default.createElement(_typography.Text, { size: 12, bold: true }, "\u0631\u0648\u06CC\u062F\u0627\u062F \u0641\u0639\u0627\u0644"

    )
    )
    )

    ), /*#__PURE__*/
    _react.default.createElement(_display.default, { display: "flex", flexDirection: "row", flexDirectionMobile: "column", alignItems: "center", justifyContent: "space-between", width: "100%" }, /*#__PURE__*/
    _react.default.createElement(_buttons.default, {
      onClickFollowMe: onClickFollowMe,
      onClickConnectUs: onClickConnectUs,
      isFollowed: isFollowed }
    )
    )
    )
    ), /*#__PURE__*/
    _react.default.createElement("style", null,
    `
          .recommend {
            display: block;
            margin: 10px 0;
          }
          @media (max-width: 768px) {
            .avatar {
              margin: 5px auto 10px;
            }
            .statistics {
              margin: 25px auto;
            }
          }
          @media (min-width: 768px) {
            .mr {
              display: flex;
              flex-direction: column;
              flex: 5 1;
              min-height: 123px;
              justify-content: space-between;
            }
          }
        `
    )
    ));

};var _default = exports.default =

OrgnizerCard;