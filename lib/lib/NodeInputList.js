'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NodeInputListItem = require('./NodeInputListItem');

var _NodeInputListItem2 = _interopRequireDefault(_NodeInputListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeInputList = function (_React$Component) {
  _inherits(NodeInputList, _React$Component);

  function NodeInputList() {
    _classCallCheck(this, NodeInputList);

    return _possibleConstructorReturn(this, (NodeInputList.__proto__ || Object.getPrototypeOf(NodeInputList)).apply(this, arguments));
  }

  _createClass(NodeInputList, [{
    key: 'onMouseUp',
    value: function onMouseUp(i) {
      this.props.onCompleteConnector(i);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var i = 0;

      return _react2.default.createElement(
        'div',
        { className: 'nodeInputWrapper' },
        _react2.default.createElement(
          'ul',
          { className: 'nodeInputList' },
          this.props.items.map(function (item) {
            return _react2.default.createElement(_NodeInputListItem2.default, {
              onMouseUp: function onMouseUp(i) {
                return _this2.onMouseUp(i);
              },
              key: i,
              index: i++,
              item: item
            });
          })
        )
      );
    }
  }]);

  return NodeInputList;
}(_react2.default.Component);

exports.default = NodeInputList;