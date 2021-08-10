"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./plugins/notify/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_index["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');