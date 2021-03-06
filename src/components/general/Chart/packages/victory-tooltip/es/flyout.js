function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint no-magic-numbers: ["error", { "ignore": [-1, 0, 1, 2] }]*/
import React from "react";
import PropTypes from "prop-types";
import { Helpers, CommonProps, Path } from "victory-core";

var Flyout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Flyout, _React$Component);

  function Flyout() {
    _classCallCheck(this, Flyout);

    return _possibleConstructorReturn(this, (Flyout.__proto__ || Object.getPrototypeOf(Flyout)).apply(this, arguments));
  }

  _createClass(Flyout, [{
    key: "getVerticalPath",
    value: function getVerticalPath(props) {
      var pointerLength = props.pointerLength,
          pointerWidth = props.pointerWidth,
          cornerRadius = props.cornerRadius,
          orientation = props.orientation,
          width = props.width,
          height = props.height;
      var sign = orientation === "top" ? 1 : -1;
      var x = props.x + (props.dx || 0);
      var y = props.y - sign * (props.dy || 0);
      var pointerEdge = y - sign * pointerLength;
      var oppositeEdge = y - sign * pointerLength - sign * height;
      var rightEdge = x + width / 2;
      var leftEdge = x - width / 2;
      var direction = orientation === "top" ? "0 0 0" : "0 0 1";
      var arc = "".concat(cornerRadius, " ").concat(cornerRadius, " ").concat(direction);
      return "M ".concat(x - pointerWidth / 2, ", ").concat(pointerEdge, "\n      L ").concat(x, ", ").concat(y, "\n      L ").concat(x + pointerWidth / 2, ", ").concat(pointerEdge, "\n      L ").concat(rightEdge - cornerRadius, ", ").concat(pointerEdge, "\n      A ").concat(arc, " ").concat(rightEdge, ", ").concat(pointerEdge - sign * cornerRadius, "\n      L ").concat(rightEdge, ", ").concat(oppositeEdge + sign * cornerRadius, "\n      A ").concat(arc, " ").concat(rightEdge - cornerRadius, ", ").concat(oppositeEdge, "\n      L ").concat(leftEdge + cornerRadius, ", ").concat(oppositeEdge, "\n      A ").concat(arc, " ").concat(leftEdge, ", ").concat(oppositeEdge + sign * cornerRadius, "\n      L ").concat(leftEdge, ", ").concat(pointerEdge - sign * cornerRadius, "\n      A ").concat(arc, " ").concat(leftEdge + cornerRadius, ", ").concat(pointerEdge, "\n      z");
    }
  }, {
    key: "getHorizontalPath",
    value: function getHorizontalPath(props) {
      var pointerLength = props.pointerLength,
          pointerWidth = props.pointerWidth,
          cornerRadius = props.cornerRadius,
          orientation = props.orientation,
          width = props.width,
          height = props.height;
      var sign = orientation === "right" ? 1 : -1;
      var x = props.x + sign * (props.dx || 0);
      var y = props.y - (props.dy || 0);
      var pointerEdge = x + sign * pointerLength;
      var oppositeEdge = x + sign * pointerLength + sign * width;
      var bottomEdge = y + height / 2;
      var topEdge = y - height / 2;
      var direction = orientation === "right" ? "0 0 0" : "0 0 1";
      var arc = "".concat(cornerRadius, " ").concat(cornerRadius, " ").concat(direction);
      return "M ".concat(pointerEdge, ", ").concat(y - pointerWidth / 2, "\n      L ").concat(x, ", ").concat(y, "\n      L ").concat(pointerEdge, ", ").concat(y + pointerWidth / 2, "\n      L ").concat(pointerEdge, ", ").concat(bottomEdge - cornerRadius, "\n      A ").concat(arc, " ").concat(pointerEdge + sign * cornerRadius, ", ").concat(bottomEdge, "\n      L ").concat(oppositeEdge - sign * cornerRadius, ", ").concat(bottomEdge, "\n      A ").concat(arc, " ").concat(oppositeEdge, ", ").concat(bottomEdge - cornerRadius, "\n      L ").concat(oppositeEdge, ", ").concat(topEdge + cornerRadius, "\n      A ").concat(arc, " ").concat(oppositeEdge - sign * cornerRadius, ", ").concat(topEdge, "\n      L ").concat(pointerEdge + sign * cornerRadius, ", ").concat(topEdge, "\n      A ").concat(arc, " ").concat(pointerEdge, ", ").concat(topEdge + cornerRadius, "\n      z");
    }
  }, {
    key: "getFlyoutPath",
    value: function getFlyoutPath(props) {
      var orientation = props.orientation || "top";
      return orientation === "left" || orientation === "right" ? this.getHorizontalPath(props) : this.getVerticalPath(props);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          datum = _props.datum,
          active = _props.active,
          role = _props.role,
          shapeRendering = _props.shapeRendering,
          className = _props.className,
          events = _props.events,
          pathComponent = _props.pathComponent,
          transform = _props.transform,
          clipPath = _props.clipPath;
      var style = Helpers.evaluateStyle(this.props.style, datum, active);
      var path = this.getFlyoutPath(this.props);
      return React.cloneElement(pathComponent, {
        style: style,
        className: className,
        shapeRendering: shapeRendering,
        role: role,
        events: events,
        transform: transform,
        d: path,
        clipPath: clipPath
      });
    }
  }]);

  return Flyout;
}(React.Component);

Object.defineProperty(Flyout, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread({}, CommonProps.primitiveProps, {
    cornerRadius: PropTypes.number,
    datum: PropTypes.object,
    dx: PropTypes.number,
    dy: PropTypes.number,
    height: PropTypes.number,
    orientation: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    pathComponent: PropTypes.element,
    pointerLength: PropTypes.number,
    pointerWidth: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
  })
});
Object.defineProperty(Flyout, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pathComponent: React.createElement(Path, null)
  }
});
export { Flyout as default };