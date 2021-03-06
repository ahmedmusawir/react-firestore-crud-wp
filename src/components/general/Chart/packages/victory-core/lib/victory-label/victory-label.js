import _uniqueId from "lodash/uniqueId";
import _isEmpty from "lodash/isEmpty";
import _defaults from "lodash/defaults";
import _assign from "lodash/assign";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import VictoryPortal from "../victory-portal/victory-portal";
import CustomPropTypes from "../victory-util/prop-types";
import Helpers from "../victory-util/helpers";
import LabelHelpers from "../victory-util/label-helpers";
import Style from "../victory-util/style";
import Log from "../victory-util/log";
import TSpan from "../victory-primitives/tspan";
import Text from "../victory-primitives/text";
var defaultStyles = {
  fill: "#252525",
  fontSize: 14,
  fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
  stroke: "transparent"
};

var VictoryLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryLabel, _React$Component);

  function VictoryLabel(props) {
    var _this;

    _classCallCheck(this, VictoryLabel);

    _this = _possibleConstructorReturn(this, (VictoryLabel.__proto__ || Object.getPrototypeOf(VictoryLabel)).call(this, props));
    _this.id = props.id === undefined ? _uniqueId("label-") : props.id;
    return _this;
  }

  _createClass(VictoryLabel, [{
    key: "getPosition",
    value: function getPosition(props, dimension) {
      if (!props.datum) {
        return 0;
      }

      var scaledPoint = Helpers.scalePoint(props, props.datum);
      return scaledPoint[dimension];
    }
  }, {
    key: "getStyle",
    value: function getStyle(props, style) {
      style = style ? _defaults({}, style, defaultStyles) : defaultStyles;
      var datum = props.datum || props.data;
      var baseStyles = Helpers.evaluateStyle(style, datum, props.active);
      return _assign({}, baseStyles, {
        fontSize: this.getFontSize(baseStyles)
      });
    }
  }, {
    key: "getStyles",
    value: function getStyles(props) {
      var _this2 = this;

      return Array.isArray(props.style) && !_isEmpty(props.style) ? props.style.map(function (style) {
        return _this2.getStyle(props, style);
      }) : [this.getStyle(props, props.style)];
    }
  }, {
    key: "getHeight",
    value: function getHeight(props, type) {
      var datum = props.datum || props.data;
      return Helpers.evaluateProp(props[type], datum, props.active);
    }
  }, {
    key: "getContent",
    value: function getContent(props) {
      if (props.text === undefined || props.text === null) {
        return undefined;
      }

      var datum = props.datum || props.data;

      if (Array.isArray(props.text)) {
        return props.text.map(function (line) {
          return Helpers.evaluateProp(line, datum, props.active);
        });
      }

      var child = Helpers.evaluateProp(props.text, datum, props.active);

      if (child === undefined || child === null) {
        return undefined;
      }

      return "".concat(child).split("\n");
    } //eslint-disable-next-line max-params

  }, {
    key: "getDy",
    value: function getDy(props, style, content, lineHeight) {
      style = Array.isArray(style) ? style[0] : style;
      lineHeight = this.checkLineHeight(lineHeight, lineHeight[0], 1);
      var fontSize = style.fontSize;
      var datum = props.datum || props.data;
      var dy = props.dy ? Helpers.evaluateProp(props.dy, datum, props.active) : 0;
      var length = content.length;
      var capHeight = this.getHeight(props, "capHeight");
      var verticalAnchor = style.verticalAnchor || props.verticalAnchor;
      var anchor = verticalAnchor ? Helpers.evaluateProp(verticalAnchor, datum) : "middle";

      switch (anchor) {
        case "end":
          return dy + (capHeight / 2 + (0.5 - length) * lineHeight) * fontSize;

        case "middle":
          return dy + (capHeight / 2 + (0.5 - length / 2) * lineHeight) * fontSize;

        default:
          return dy + (capHeight / 2 + lineHeight / 2) * fontSize;
      }
    }
  }, {
    key: "checkLineHeight",
    value: function checkLineHeight(lineHeight, val, fallbackVal) {
      if (Array.isArray(lineHeight)) {
        return _isEmpty(lineHeight) ? fallbackVal : val;
      }

      return lineHeight;
    }
  }, {
    key: "getTransform",
    value: function getTransform(props, style) {
      var active = props.active,
          datum = props.datum,
          x = props.x,
          y = props.y,
          polar = props.polar;
      var defaultAngle = polar ? LabelHelpers.getPolarAngle(props) : 0;
      var baseAngle = style.angle === undefined ? props.angle : style.angle;
      var angle = baseAngle === undefined ? defaultAngle : baseAngle;
      var transform = props.transform || style.transform;
      var transformPart = transform && Helpers.evaluateProp(transform, datum, active);
      var rotatePart = angle && {
        rotate: [angle, x, y]
      };
      return transformPart || angle ? Style.toTransformString(transformPart, rotatePart) : undefined;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize(style) {
      var baseSize = style && style.fontSize;

      if (typeof baseSize === "number") {
        return baseSize;
      } else if (baseSize === undefined || baseSize === null) {
        return defaultStyles.fontSize;
      } else if (typeof baseSize === "string") {
        var fontSize = +baseSize.replace("px", "");

        if (!isNaN(fontSize)) {
          return fontSize;
        } else {
          Log.warn("fontSize should be expressed as a number of pixels");
          return defaultStyles.fontSize;
        }
      }

      return defaultStyles.fontSize;
    }
  }, {
    key: "renderElements",
    value: function renderElements(props, content) {
      var _this3 = this;

      var datum = props.datum,
          active = props.active,
          inline = props.inline,
          className = props.className,
          title = props.title,
          desc = props.desc,
          events = props.events,
          direction = props.direction;
      var style = this.getStyles(props);
      var lineHeight = this.getHeight(props, "lineHeight");
      var textAnchor = props.textAnchor ? Helpers.evaluateProp(props.textAnchor, datum, active) : "start";
      var dx = props.dx ? Helpers.evaluateProp(props.dx, datum, active) : 0;
      var dy = this.getDy(props, style, content, lineHeight);
      var transform = this.getTransform(props, style);
      var x = props.x !== undefined ? props.x : this.getPosition(props, "x");
      var y = props.y !== undefined ? props.y : this.getPosition(props, "y");
      var textChildren = content.map(function (line, i) {
        var currentStyle = style[i] || style[0];
        var lastStyle = style[i - 1] || style[0];
        var fontSize = (currentStyle.fontSize + lastStyle.fontSize) / 2;

        var currentLineHeight = _this3.checkLineHeight(lineHeight, (lineHeight[i] + (lineHeight[i - 1] || lineHeight[0])) / 2, 1);

        var tspanProps = {
          key: "".concat(_this3.id, "-key-").concat(i),
          x: !inline ? props.x : undefined,
          dx: dx,
          dy: i && !inline ? currentLineHeight * fontSize : undefined,
          textAnchor: currentStyle.textAnchor || textAnchor,
          style: currentStyle,
          content: line
        };
        return React.cloneElement(props.tspanComponent, tspanProps);
      });
      return React.cloneElement(props.textComponent, {
        direction: direction,
        dx: dx,
        dy: dy,
        x: x,
        y: y,
        events: events,
        transform: transform,
        className: className,
        title: title,
        desc: desc,
        id: this.id
      }, textChildren);
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.getContent(this.props);

      if (content === null || content === undefined) {
        return null;
      }

      var label = this.renderElements(this.props, content);
      return this.props.renderInPortal ? React.createElement(VictoryPortal, null, label) : label;
    }
  }]);

  return VictoryLabel;
}(React.Component);

Object.defineProperty(VictoryLabel, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryLabel"
});
Object.defineProperty(VictoryLabel, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "label"
});
Object.defineProperty(VictoryLabel, "defaultStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: defaultStyles
});
Object.defineProperty(VictoryLabel, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    active: PropTypes.bool,
    angle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    capHeight: PropTypes.oneOfType([PropTypes.string, CustomPropTypes.nonNegative, PropTypes.func]),
    className: PropTypes.string,
    data: PropTypes.array,
    datum: PropTypes.any,
    desc: PropTypes.string,
    direction: PropTypes.oneOf(["rtl", "ltr", "inherit"]),
    dx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
    dy: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
    events: PropTypes.object,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    inline: PropTypes.bool,
    labelPlacement: PropTypes.oneOf(["parallel", "perpendicular", "vertical"]),
    lineHeight: PropTypes.oneOfType([PropTypes.string, CustomPropTypes.nonNegative, PropTypes.func, PropTypes.array]),
    origin: PropTypes.shape({
      x: CustomPropTypes.nonNegative,
      y: CustomPropTypes.nonNegative
    }),
    polar: PropTypes.bool,
    renderInPortal: PropTypes.bool,
    scale: PropTypes.shape({
      x: CustomPropTypes.scale,
      y: CustomPropTypes.scale
    }),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func, PropTypes.array]),
    textAnchor: PropTypes.oneOfType([PropTypes.oneOf(["start", "middle", "end", "inherit"]), PropTypes.func]),
    textComponent: PropTypes.element,
    title: PropTypes.string,
    transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
    tspanComponent: PropTypes.element,
    verticalAnchor: PropTypes.oneOfType([PropTypes.oneOf(["start", "middle", "end"]), PropTypes.func]),
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }
});
Object.defineProperty(VictoryLabel, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    direction: "inherit",
    textComponent: React.createElement(Text, null),
    tspanComponent: React.createElement(TSpan, null),
    capHeight: 0.71,
    // Magic number from d3.
    lineHeight: 1
  }
});
export { VictoryLabel as default };