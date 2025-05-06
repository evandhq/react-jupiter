"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.VerticalWithPartnership = exports.VerticalWithFinished = exports.VerticalWithCustomCover = exports.VerticalWithAds = exports.Vertical = exports.HorizontalWithFinished = exports.HorizontalWithAds = exports.HorizontalMobile = exports.Horizontal = void 0;var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));

var _index2 = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };} // import '../storybook.css';

const defaultArgs = {
  title: "تایتل یک رویداد نسبتا طولانی در اینجاست که باید و باید و قرار است اضافه بیاید و بزند به بیرون",
  cover: "https://static.evand.net/assets/images/defaults/event-cover.jpg",
  date: "2020-01-10T14:00:00+0330",
  place: "تهران",
  price: "از ۴۴۰۰۰ تومان",
  clickBookmark: () => true,
  queryString: "icn=trendEvents&ici=fp5",
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "/tosomewhere" }, element)
};

const organizationArgs = {
  organization: {
    name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
    logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg'
  },
  renderOrganizationLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "/toorganization" }, element)
};var _default = exports.default =

{
  title: 'Components/Card/EventCard',
  component: _index.default,
  argTypes: {
    type: {
      control: 'select',
      options: ['horizontal-mobile', 'horizontal', 'vertical'],
      description: 'The type of the event card'
    },
    title: {
      control: 'text',
      description: 'The title of the event'
    },
    cover: {
      control: 'text',
      description: 'The cover image URL'
    },
    date: {
      control: 'text',
      description: 'The event date'
    },
    place: {
      control: 'text',
      description: 'The event location'
    },
    price: {
      control: 'text',
      description: 'The event price'
    },
    ads: {
      control: 'boolean',
      description: 'Whether the card is an advertisement'
    },
    finished: {
      control: 'boolean',
      description: 'Whether the event is finished'
    },
    partnership: {
      control: 'object',
      description: 'Partnership information'
    },
    organization: {
      control: 'object',
      description: 'Organization information'
    },
    clickBookmark: {
      control: 'function',
      description: 'Function to handle bookmark click'
    },
    renderEventLink: {
      control: 'function',
      description: 'Function to render event link'
    },
    renderOrganizationLink: {
      control: 'function',
      description: 'Function to render organization link'
    },
    coverImage: {
      control: 'element',
      description: 'Custom cover image element'
    }
  }
};

const Template = (args) => /*#__PURE__*/_react.default.createElement(_index.default, args);

const HorizontalMobile = exports.HorizontalMobile = Template.bind({});
HorizontalMobile.args = {
  ...defaultArgs,
  type: 'horizontal-mobile'
};

const Horizontal = exports.Horizontal = Template.bind({});
Horizontal.args = {
  ...defaultArgs,
  type: 'horizontal'
};

const HorizontalWithAds = exports.HorizontalWithAds = Template.bind({});
HorizontalWithAds.args = {
  ...defaultArgs,
  type: 'horizontal',
  ads: true
};

const HorizontalWithFinished = exports.HorizontalWithFinished = Template.bind({});
HorizontalWithFinished.args = {
  ...defaultArgs,
  type: 'horizontal',
  finished: true
};

const Vertical = exports.Vertical = Template.bind({});
Vertical.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "/tosomewherenew" }, element)
};

const VerticalWithCustomCover = exports.VerticalWithCustomCover = Template.bind({});
VerticalWithCustomCover.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "/tosomewherenew" }, element),
  coverImage: /*#__PURE__*/_react.default.createElement(_index2.VerticalCover, { src: "https://static.evand.net/assets/images/defaults/event-cover.jpg" })
};

const VerticalWithFinished = exports.VerticalWithFinished = Template.bind({});
VerticalWithFinished.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  finished: true,
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "/tosomewherenew" }, element)
};

const VerticalWithAds = exports.VerticalWithAds = Template.bind({});
VerticalWithAds.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  ads: true,
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "/tosomewherenew" }, element)
};

const VerticalWithPartnership = exports.VerticalWithPartnership = Template.bind({});
VerticalWithPartnership.args = {
  ...defaultArgs,
  ...organizationArgs,
  type: 'vertical',
  title: 'تایتل یک رویداد اینجاست کهن',
  partnership: {
    status: 'colleague'
  },
  renderEventLink: (element) => /*#__PURE__*/_react.default.createElement("a", { href: "/tosomewherenew" }, element)
};