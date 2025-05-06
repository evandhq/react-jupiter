"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Sponsor = exports.Partner = exports.Followed = exports.Default = void 0;var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'OrganizerCard',
  component: _index.default,

  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'وزارت آموزش و پرورش'
    },
    followersCount: {
      control: 'text',
      defaultValue: '۱۳۲۴۷'
    },
    logo: {
      control: 'text',
      defaultValue: 'https://i.pravatar.cc/300?img=13'
    },
    activeEventsCount: {
      control: 'text',
      defaultValue: '۱۲۳'
    },
    allEventsCount: {
      control: 'text',
      defaultValue: '۲۴۵۶۷'
    },
    recommendedCount: {
      control: 'text',
      defaultValue: '۳۳ نفر'
    },
    isFollowed: {
      control: 'boolean',
      defaultValue: false
    },
    partnership: {
      control: 'select',
      options: ['colleague', 'partner', 'sponsor'],
      defaultValue: 'colleague'
    }
  }
};

const Template = (args) => /*#__PURE__*/
_react.default.createElement(_index.default, _extends({},
args, {
  renderOrganizerLink: (el) => /*#__PURE__*/_react.default.createElement("a", { href: "https://i.pravatar.cc/300?img=1" }, el) })
);


const Default = exports.Default = Template.bind({});
Default.args = {
  name: 'وزارت آموزش و پرورش',
  followersCount: '۱۳۲۴۷',
  logo: 'https://i.pravatar.cc/300?img=13',
  activeEventsCount: '۱۲۳',
  allEventsCount: '۲۴۵۶۷',
  recommendedCount: '۳۳ نفر',
  isFollowed: false,
  partnership: 'colleague'
};

const Partner = exports.Partner = Template.bind({});
Partner.args = {
  ...Default.args,
  partnership: 'partner'
};

const Sponsor = exports.Sponsor = Template.bind({});
Sponsor.args = {
  ...Default.args,
  partnership: 'sponsor'
};

const Followed = exports.Followed = Template.bind({});
Followed.args = {
  ...Default.args,
  isFollowed: true
};