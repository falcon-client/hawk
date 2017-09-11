'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _NodeInputList = require('./NodeInputList');

var _NodeInputList2 = _interopRequireDefault(_NodeInputList);

var _NodeOutputList = require('./NodeOutputList');

var _NodeOutputList2 = _interopRequireDefault(_NodeOutputList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_React$Component) {
  _inherits(Node, _React$Component);

  function Node() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Node);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Node.__proto__ || Object.getPrototypeOf(Node)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selected: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Node, [{
    key: 'handleDragStart',
    value: function handleDragStart(event, ui) {
      this.props.onNodeStart(this.props.nid, ui);
    }
  }, {
    key: 'handleDragStop',
    value: function handleDragStop(event, ui) {
      this.props.onNodeStop(this.props.nid, ui.position);
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag(event, ui) {
      this.props.onNodeMove(this.props.index, ui.position);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.selected !== nextState.selected;
    }
  }, {
    key: 'onStartConnector',
    value: function onStartConnector(index) {
      this.props.onStartConnector(this.props.nid, index);
    }
  }, {
    key: 'onCompleteConnector',
    value: function onCompleteConnector(index) {
      this.props.onCompleteConnector(this.props.nid, index);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      this.setState({ selected: true });
      if (this.props.onNodeSelect) {
        this.props.onNodeSelect(this.props.nid);
      }
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      var selected = this.state.selected;

      if (this.props.onNodeDeselect && selected) {
        this.props.onNodeDeselect(this.props.nid);
      }
      this.setState({ selected: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var selected = this.state.selected;


      var nodeClass = 'node' + (selected ? ' selected' : '');

      return _react2.default.createElement(
        'div',
        {
          onDoubleClick: function onDoubleClick(e) {
            _this2.handleClick(e);
          }
        },
        _react2.default.createElement(
          _reactDraggable2.default,
          {
            start: { x: this.props.pos.x, y: this.props.pos.y },
            handle: '.node-header',
            onStart: function onStart(event, ui) {
              return _this2.handleDragStart(event, ui);
            },
            onStop: function onStop(event, ui) {
              return _this2.handleDragStop(event, ui);
            },
            onDrag: function onDrag(event, ui) {
              return _this2.handleDrag(event, ui);
            }
          },
          _react2.default.createElement(
            'section',
            { className: nodeClass, style: { zIndex: 10000 } },
            _react2.default.createElement(
              'header',
              {
                className: 'node-header',
                style: { backgroundColor: this.props.color }
              },
              _react2.default.createElement(
                'span',
                { className: 'node-title' },
                this.props.title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'node-content' },
              _react2.default.createElement(_NodeInputList2.default, {
                items: this.props.inputs,
                onCompleteConnector: function onCompleteConnector(index) {
                  return _this2.onCompleteConnector(index);
                }
              }),
              _react2.default.createElement(_NodeOutputList2.default, {
                items: this.props.outputs,
                onStartConnector: function onStartConnector(index) {
                  return _this2.onStartConnector(index);
                }
              })
            )
          )
        )
      );
    }
  }]);

  return Node;
}(_react2.default.Component);

exports.default = (0, _reactOnclickoutside2.default)(Node);