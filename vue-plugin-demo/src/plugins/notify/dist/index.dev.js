"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Notify = _interopRequireDefault(require("./Notify.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function notify() {
  var NotifyComponent;

  function install(Vue) {
    elementInit(Vue);
    Vue.prototype.$notify = notifyInit;
  }

  function elementInit(Vue) {
    // 继承组件
    var ClassNotify = Vue.extend(_Notify["default"]); // 获取组件实例

    var instance = new ClassNotify(); // 挂载组件，添加el选项

    NotifyComponent = instance.$mount(); // 获取el

    var el = instance.$el; // 插入el

    document.body.appendChild(el);
  }

  function notifyInit(options) {
    NotifyComponent.notify(options); // 调用
  }

  return {
    install: install
  };
}

var _default = notify();

exports["default"] = _default;