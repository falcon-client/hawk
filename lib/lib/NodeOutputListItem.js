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

var NodeOutputListItem = function (_React$Component) {
  _inherits(NodeOutputListItem, _React$Component);

  function NodeOutputListItem() {
    _classCallCheck(this, NodeOutputListItem);

    return _possibleConstructorReturn(this, (NodeOutputListItem.__proto__ || Object.getPrototypeOf(NodeOutputListItem)).apply(this, arguments));
  }

  _createClass(NodeOutputListItem, [{
    key: "onMouseDown",
    value: function onMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();

      this.props.onMouseDown(this.props.index);
    }
  }, {
    key: "noop",
    value: function noop(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "li",
        { onMouseDown: function onMouseDown(e) {
            return _this2.onMouseDown(e);
          } },
        _react2.default.createElement(
          "a",
          { href: "#", onClick: function onClick(e) {
              return _this2.noop(e);
            } },
          this.props.item.name,
          " ",
          _react2.default.createElement("i", { className: "fa fa-circle-o" })
        )
      );
    }
  }]);

  return NodeOutputListItem;
}(_react2.default.Component);

exports.default = NodeOutputListItem;