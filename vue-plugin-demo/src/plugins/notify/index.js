import Notify from "./Notify.vue";


function notify() {
  let NotifyComponent;
  
  function install(Vue) {
    elementInit(Vue);
    Vue.prototype.$notify = notifyInit;
  }

  function elementInit(Vue) {
    // 继承组件
    const ClassNotify = Vue.extend(Notify);
    // 获取组件实例
    const instance = new ClassNotify();
    // 挂载组件，添加el选项
    NotifyComponent = instance.$mount();
    // 获取el
    const el = instance.$el;
    // 插入el
    document.body.appendChild(el);
  }

  function notifyInit(options) {
    NotifyComponent.notify(options); // 调用
  }

  return {
    install,
  };
}

export default notify();
