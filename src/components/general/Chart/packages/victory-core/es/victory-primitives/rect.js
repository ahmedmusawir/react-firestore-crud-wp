function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";

var Rect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rect, _React$Component);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).apply(this, arguments));
  }

  _createClass(Rect, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !isEqual(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          x = _props.x,
          y = _props.y,
          rx = _props.rx,
          ry = _props.ry,
          width = _props.width,
          height = _props.height,
          events = _props.events,
          className = _props.className,
          clipPath = _props.clipPath,
          style = _props.style,
          role = _props.role,
          shapeRendering = _props.shapeRendering,
          transform = _props.transform;
      return React.createElement("rect", _extends({
        x: x,
        y: y,
        rx: rx,
        ry: ry,
        width: width,
        height: height,
        className: className,
        clipPath: clipPath,
        style: style,
        transform: transform,
        role: role || "presentation",
        shapeRendering: shapeRendering || "auto",
        vectorEffect: "non-scaling-stroke"
      }, events));
    }
  }]);

  return Rect;
}(React.Component);

Object.defineProperty(Rect, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: PropTypes.string,
    clipPath: PropTypes.string,
    events: PropTypes.object,
    height: PropTypes.number,
    role: PropTypes.string,
    rx: PropTypes.number,
    ry: PropTypes.number,
    shapeRendering: PropTypes.string,
    style: PropTypes.object,
    transform: PropTypes.string,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
  }
});
export { Rect as default };