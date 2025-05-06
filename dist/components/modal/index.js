"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _reactModal = _interopRequireDefault(require("react-modal"));
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _index = require("./index.style");
var _icon = _interopRequireDefault(require("../icon"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}














// bind modal to the body of the app
_reactModal.default.setAppElement('body');

function JupiterModal(_ref)










{let { onRequestClose = () => {}, onAfterOpen = () => {}, hasCloseButton = true, disabledClose = false, modalWidth = '80%', modalWidthMobile = '100%', fullHeight = false, isOpen, className = '', children } = _ref;
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 99
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '990px',
      padding: '20px',
      backgroundColor: 'white',
      height: fullHeight ? '100%' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto',
      backgroundClip: 'padding-box',
      border: '1px solid rgba(0,0,0,.2)',
      borderRadius: '.2rem'
    }
  };
  return (/*#__PURE__*/
    _react.default.createElement(_reactModal.default, {
      isOpen: isOpen,
      onAfterOpen: onAfterOpen,
      onRequestClose: onRequestClose,
      shouldCloseOnOverlayClick: !disabledClose,
      overlayClassName: "modal",
      className: `content ${className}`,
      style: customStyles }, /*#__PURE__*/

    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.StyledWrapper, null,
    !disabledClose && hasCloseButton && /*#__PURE__*/
    _react.default.createElement(_index.StyledIcon, { onClick: onRequestClose, "aria-hidden": "true" }, /*#__PURE__*/
    _react.default.createElement(_icon.default, { name: "close", size: "md" })
    ),

    children
    ), /*#__PURE__*/
    _react.default.createElement("style", null,
    `
          .content {
            width: ${modalWidth};
          }
          @media(max-width: 767px){
            .content {
              width: ${modalWidthMobile};
            }
          }
        `
    )
    ));

}var _default = exports.default =

JupiterModal;