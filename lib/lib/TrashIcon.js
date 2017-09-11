"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrashIcon = function (_React$Component) {
  _inherits(TrashIcon, _React$Component);

  function TrashIcon() {
    _classCallCheck(this, TrashIcon);

    return _possibleConstructorReturn(this, (TrashIcon.__proto__ || Object.getPrototypeOf(TrashIcon)).apply(this, arguments));
  }

  _createClass(TrashIcon, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var position = this.props.position;

      return _react2.default.createElement(
        "g",
        {
          className: "trash-icon",
          fill: "none",
          stroke: "none",
          strokeWidth: "1",
          transform: "translate(" + (position.x - 6) + "," + (position.y + 15) + ")",
          onClick: function onClick(e) {
            _this2.handleClick(e);
          }
        },
        _react2.default.createElement("circle", { className: "trash-icon-bg", cx: 7, cy: 7, r: "14", fill: "#337ab7" }),
        _react2.default.createElement(
          "g",
          {
            className: "trash-icon-trashcan",
            fill: "#FFFFFF",
            transform: "translate(-336.000000, -192.000000)"
          },
          _react2.default.createElement("path", {
            d: "M347.999959,195 L350,195 L350,196 L349,196 L349,207.001498 C349,207.552511 348.554265,208 348.004423,208 L338.995577,208 C338.444837,208 338,207.552955 338,207.001498 L338,196 L337,196 L337,195 L338.995577,195 L339.000042,195 L339,194.990631 L339,193.009369 C339,192.443353 339.446616,192 339.997545,192 L347.002455,192 C347.553689,192 348,192.45191 348,193.009369 L348,194.990631 Z M340,194 L340,195 L347,195 L347,194 C347,193.447715 346.552285,193 346,193 L341,193 C340.447715,193 340,193.447715 340,194 Z M339,196 L339,207 L348,207 L348,196 Z M341,197 L342,197 L342,206 L341,206 Z M343,197 L344,197 L344,206 L343,206 Z M345,197 L345,206 L346,206 L346,197 L345,197 Z M345,197",
            id: "Rectangle 159"
          })
        )
      );
    }
  }]);

  return TrashIcon;
}(_react2.default.Component);

exports.default = TrashIcon;