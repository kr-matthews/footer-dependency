"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = Body;
exports.HeavyFooter = HeavyFooter;
exports.default = WithHeavyFooter;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function WithHeavyFooter(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: "calc(100vh - 18px)"
    }
  }, children);
}
function Body(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: "1 0 auto"
    }
  }, children);
}
function HeavyFooter(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flexShrink: 0,
      textAlign: "center",
      paddingTop: "10px"
    }
  }, children);
}