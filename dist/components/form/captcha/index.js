"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));
var _textInput = _interopRequireDefault(require("../text-input"));
var _button = _interopRequireDefault(require("../../button"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}














function Captcha(_ref)





{let { src, errorMessage = '', inputRef = null, handleCaptchaError = () => {}, handleRetryCaptcha = null } = _ref;
  const [imageLoadingStatus, setImageLoadingStatus] = (0, _react.useState)('loading');

  function hanelImgLoading() {
    setImageLoadingStatus('loaded');
  }
  function handleImgError() {
    setImageLoadingStatus('failedToLoad');
    handleCaptchaError();
  }

  return (/*#__PURE__*/
    _react.default.createElement(_index.CaptchaBoxContainer, { "data-test": "captcha-box" }, /*#__PURE__*/
    _react.default.createElement(_index.InputConiatiner, null, /*#__PURE__*/
    _react.default.createElement(_textInput.default, {
      "data-test": "captcha-input",
      htmlElementName: "captcha-input",
      label: "\u06A9\u062F \u062A\u0635\u0648\u06CC\u0631\u06CC",
      errorMessage: errorMessage,
      type: "text",
      inputRef: inputRef }
    )
    ), /*#__PURE__*/
    _react.default.createElement(_index.Container, null,
    imageLoadingStatus !== 'loaded' && /*#__PURE__*/
    _react.default.createElement(_index.Loading, null), /*#__PURE__*/

    _react.default.createElement("img", {
      className: `${imageLoadingStatus === 'loaded' ? '' : 'hide'}`,
      width: "120px",
      height: "32px",
      src: src,
      alt: "captcha-img",
      loading: "lazy",
      onLoad: hanelImgLoading,
      onError: handleImgError,
      "data-test": "captcha-img" }
    )
    ),
    handleRetryCaptcha && /*#__PURE__*/
    _react.default.createElement(_index.Container, null, /*#__PURE__*/
    _react.default.createElement(_button.default, {
      "data-test": "captcha-retry",
      htmlType: "button",
      icon: "refresh",
      isLoading: imageLoadingStatus === 'loading',
      onClick: handleRetryCaptcha,
      mainColor: "blue",
      size: "sm",
      styleType: imageLoadingStatus === 'failedToLoad' ? 'primary' : 'tertiary' },
    "\u06A9\u062F \u062A\u0635\u0648\u06CC\u0631\u06CC \u062C\u062F\u06CC\u062F"

    )
    )

    ));

}var _default = exports.default =

Captcha;