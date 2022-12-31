"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeLink = CodeLink;
exports.HomeLink = HomeLink;
exports.default = Link;
var _react = _interopRequireDefault(require("react"));
var _github = _interopRequireDefault(require("../../assets/github.png"));
var _githubDark = _interopRequireDefault(require("../../assets/github-dark.png"));
var _websiteLogo = _interopRequireDefault(require("../../assets/website-logo.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Link(_ref) {
  var url = _ref.url,
    image = _ref.image,
    description = _ref.description;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    title: description
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      height: "1.5em",
      margin: "0.2em 0.5em"
    },
    src: image,
    alt: description
  }));
}
function HomeLink() {
  return /*#__PURE__*/_react.default.createElement(Link, {
    description: "Personal Website",
    url: "https://kr-matthews.github.io/",
    image: _websiteLogo.default
  });
}
function CodeLink(_ref2) {
  var _ref2$gitHubRepoName = _ref2.gitHubRepoName,
    gitHubRepoName = _ref2$gitHubRepoName === void 0 ? "" : _ref2$gitHubRepoName,
    _ref2$themeType = _ref2.themeType,
    themeType = _ref2$themeType === void 0 ? "light" : _ref2$themeType;
  return /*#__PURE__*/_react.default.createElement(Link, {
    description: "Project Repository",
    url: "https://github.com/kr-matthews/".concat(gitHubRepoName),
    image: themeType === "light" ? _github.default : _githubDark.default
  });
}